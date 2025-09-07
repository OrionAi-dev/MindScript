.PHONY: venv docs serve clean

venv:
	python3 -m venv .venv
	. .venv/bin/activate && python -m pip install -U pip && python -m pip install -r docs/requirements.txt

docs:
	. .venv/bin/activate && python -m mkdocs build --strict --site-dir site

serve:
	. .venv/bin/activate && python -m mkdocs serve -a 0.0.0.0:8000

clean:
	rm -rf site
