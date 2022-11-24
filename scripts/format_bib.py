import sys
import os.path

'''
Usage:
python3 format_bib.py input_file_path output
'''

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print('Incorrect number of arguments, expected 3 got', len(sys.argv))
        print('Usage: python3 format_bib.py input_file_path output_file_path')
    
    entries = []

    from_file = os.path.join(os.path.dirname(__file__), sys.argv[1])
    to_file = os.path.join(os.path.dirname(__file__), sys.argv[2])

    with open(from_file, 'r') as f:
        lines = f.readlines()
        string = ''.join(lines).strip()
        entries = list(filter(lambda x: x, string.split('@article')))
        entries = ['`@article' + entry.strip().replace('\n', '\\n') + '`,\n' for entry in entries]

    prev_contents = []

    
    with open(os.path.join(os.path.dirname(__file__), '../data/publications.js'), 'r') as f:
        prev_contents = f.readlines()
    
    prev_contents = [prev_contents[0]] + entries + prev_contents[1:]

    with open(to_file, 'w') as f:
        contents = "".join(prev_contents)
        f.write(contents)