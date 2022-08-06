import Head from 'next/head';
import Layout from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';
import style from '../styles/Publications.module.scss';
import { motion } from 'framer-motion';
import fadeInUp from '../animations/fadeInUp';
import stagger from '../animations/stagger';
import axios from 'axios';
import bibtexParse from 'bibtex-parser-js';
import { useState, useEffect } from 'react';
import Select from '../components/select/select';
import _ from 'lodash';
import latexParser from '../helpers/latexParser';
import pagesParser from '../helpers/pagesParser';
import parseNames from '../helpers/parseNames';
import data from '../data/publications';

export default function Publications() {
  const [sortBy, setSortBy] = useState('year');
  const [order, setOrder] = useState(-1);
  const [groupBy, setGroupBy] = useState('year');

  useEffect(() => {
    switch (sortBy) {
      case 'year':
        setGroupBy('year');
        break;
      case 'title':
        setGroupBy('firstTitleLetter');
        break;
      case 'journal':
        setGroupBy('firstJournalLetter');
        break;
      case 'author':
        setGroupBy('firstAuthorLetter');
        break;
      default:
        setGroupBy('year');
        break;
    }
  }, [sortBy]);
  let publications = data.map((publication) => {
    const publicationJson = bibtexParse.toJSON(publication);
    return publicationJson;
  });

  publications.forEach((pub) => {
    if (pub[0].entryTags.JOURNAL === undefined) {
      console.log(pub[0].entryTags.TITLE);
    }
  });

  publications = publications
    .map((publication) => {
      return publication[0];
    })
    .map((publication) => {
      return {
        citationKey: publication.citationKey,
        title: publication.entryTags.TITLE,
        firstTitleLetter:
          publication.entryTags.TITLE[0] == '{'
            ? publication.entryTags.TITLE[1]
            : publication.entryTags.TITLE[0],
        author: publication.entryTags.AUTHOR ?? '',
        firstAuthorLetter:
          (publication.entryTags.AUTHOR?.[0] ?? '') == '{'
            ? publication.entryTags.AUTHOR[1]
            : publication.entryTags.AUTHOR?.[0],
        journal: publication.entryTags.JOURNAL ?? '',
        firstJournalLetter: (
          publication.entryTags.JOURNAL?.[0] ?? ''
        ).toUpperCase(),
        volume: publication.entryTags.VOLUME,
        pages: publication.entryTags.PAGES,
        year: publication.entryTags.YEAR,
        url: publication.entryTags.URL,
      };
    });

  publications.sort((a, b) =>
    a[sortBy] > b[sortBy]
      ? order === 'ascending'
        ? 1
        : -1
      : order === 'ascending'
      ? -1
      : 1
  );

  publications = _.groupBy(publications, groupBy);
  return (
    <Layout title='Ono Lab | Publications'>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div className={utilStyles.container} variants={stagger}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={utilStyles['page-header']}
          >
            Publications
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={style.options}
          >
            <Select
              label={'Sort By'}
              options={['year', 'author', 'journal', 'title']}
              initial={'year'}
              onChange={(option) => {
                setSortBy(option);
              }}
            />
            <Select
              label={'Order'}
              options={['ascending', 'descending']}
              initial={'descending'}
              onChange={(option) => {
                setOrder(option);
              }}
            />
          </motion.div>
          <motion.div
            variants={stagger}
            className={style.citations}
            key={sortBy + order}
          >
            {Object.keys(publications)
              .sort((a, b) =>
                a > b
                  ? order === 'ascending'
                    ? 1
                    : -1
                  : order === 'ascending'
                  ? -1
                  : 1
              )
              .map((groupName) => {
                const section = publications[groupName];
                return (
                  <motion.div variants={fadeInUp} key={groupName}>
                    <motion.h1>{groupName}</motion.h1>
                    {section.map((publication) => {
                      const {
                        citationKey,
                        author,
                        title,
                        journal,
                        volume,
                        pages,
                        year,
                        url,
                      } = publication;
                      const authorsArray = author
                        .split(' and')
                        .map((author) => author.split(',').reverse().join(' '));
                      const authors =
                        authorsArray.length > 1 ? 
                          authorsArray.slice(0, -1).join(', ') + ', and ' +
                          authorsArray.slice(-1)[0] : authorsArray[0];
                      return (
                        <motion.p
                          // variants={fadeInUp}
                          key={citationKey + sortBy + order}
                          className={style.citation}
                          dangerouslySetInnerHTML={{
                            __html: `${latexParser(
                              authors
                            )}. (${year}) ${latexParser(
                              title
                            )}. <em>${latexParser(
                              journal
                            )}</em>. <b>${volume}</b>${
                              pages !== undefined
                                ? `, ${pagesParser(pages)}`
                                : ''
                            }. ${
                              url !== undefined
                                ? '<a href=' + url + '>' + url + '</a>'
                                : ''
                            }`,
                          }}
                        >
                          {/* {`${author}. ${year}. ${title}. ${journal}. ${volume}:${pages}`} */}
                        </motion.p>
                      );
                    })}
                  </motion.div>
                );
              })}
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await axios.get(process.env.API_URL + '/publications');

//   const data = res.data;

//   const publications = data.map((publication) => {
//     const publicationJson = bibtexParse.toJSON(publication.bibtex);
//     return publicationJson;
//   });

//   publications.forEach((pub) => {
//     if (pub[0].entryTags.JOURNAL === undefined) {
//       console.log(pub[0].entryTags.TITLE);
//     }
//   });

//   return {
//     props: {
//       publications: publications,
//     },
//   };
// }
