import { motion } from "framer-motion";
import stagger from "../../animations/stagger";
import { Icon } from "@iconify/react";

const ProjectCard = ({ project }) => {
  // For YouTube embeds, render differently
  if (project.youtube) {
    return (
      <motion.div
        className="overflow-hidden rounded-sm h-full flex flex-col"
        variants={stagger}
      >
        <iframe
          src={project.youtube}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          className="w-full aspect-video rounded-sm"
        />
        <div className="py-3 flex flex-col gap-2">
          <p
            className="text-sm text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          {project.link && (
            <a
              href={project.link.url}
              className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 transition-colors duration-200 w-fit"
              rel="noopener noreferrer"
              target="_blank"
            >
              {project.link.label}
              <Icon icon="eva:external-link-fill" className="text-[10px]" />
            </a>
          )}
        </div>
      </motion.div>
    );
  }

  // For image cards, match YouTube style
  return (
    <motion.div
      className="group overflow-hidden rounded-sm h-full flex flex-col"
      variants={stagger}
    >
      <div className="aspect-video overflow-hidden rounded-sm bg-gray-100">
        {project.img && (
          <img
            src={project.img}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="py-3 flex flex-col gap-2">
        <p
          className="text-sm text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        {project.link && (
          <a
            href={project.link.url}
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 transition-colors duration-200 w-fit"
            rel="noopener noreferrer"
            target="_blank"
          >
            {project.link.label}
            <Icon icon="eva:external-link-fill" className="text-[10px]" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
