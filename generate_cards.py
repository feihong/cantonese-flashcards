from pathlib import Path
import subprocess
import re

output_file = Path('cards_to_import.txt')

lines = subprocess.check_output(['pbpaste']).decode().splitlines()

prefix = """\
#separator:tab
#tags column:3
#columns:Front\tBack\ttags
"""

with output_file.open('w') as fp:
  fp.write(prefix)
  for line in lines:
    front_back = re.sub(r'\s+', '\t', line)
    print()
    fp.write(f'{front_back}\tcantonese\n')

print(output_file.read_text())
