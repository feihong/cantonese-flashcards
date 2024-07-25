install:
  pip install -r requirements.txt

serve:
  cd Cantonese && npx serve

build:
  python build.py

clean:
  rm -rf _build

update: build
	python update_anki.py

anki:
	QTWEBENGINE_REMOTE_DEBUGGING=8080 open -a Anki
