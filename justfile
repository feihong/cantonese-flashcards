install:
  pip install -r requirements.txt

serve:
  cd Cantonese && npx serve

build:
  npx vite build && python build.py

update: build
	python update_anki.py

anki:
	QTWEBENGINE_REMOTE_DEBUGGING=8080 open -a Anki
