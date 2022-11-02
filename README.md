# Royce Data Handbook

 This is a collection of guides, tutorials, and bits of information for the Royce Institute Data Infrastructure Project, we have written an extensive tutorial on how you can contribute which can be found [here].

## Usage

### Building the book

If you'd like to develop and/or build the Royce Data Handbook book, you should:

1. Clone this repository
2. Run `pip install -r requirements.txt` (it is recommended you do this within a virtual environment)
   - Or `conda env create --file env.yaml`
3. (Optional) Edit the books source files located in the `handbook/` directory
4. (Optional) Run `jupyter-book clean handbook/` to remove any existing builds (Not recommended unless you are prepared to transfer files from `handbook` to `handbook/_build` in the hierarchical structure of this repository)
5. Run `jupyter-book build handbook/`

A fully-rendered HTML version of the book will be built in `handbook/_build/html/` in your local directory.  
You can view the fully rendered HTML version locally by opening `index.html` located in `handbook/_build/html/` in your web browser.

## Contributors

We welcome and recognize all contributions. You can see a list of current contributors in the [contributors tab](https://github.com/Data-Curators-Royce-Institute/royce-data-handbook/graphs/contributors).

Note that the `main` branch is protected. If you would like to contribute to this project, please create a new branch, push your branch to the repository and create a pull request. We will then review it and merge it with the main branch. For streamlining purposes branches will be deleted once merged.

## Credits

This project is created using the excellent open source [Jupyter Book project](https://jupyterbook.org/) and the [executablebooks/cookiecutter-jupyter-book template](https://github.com/executablebooks/cookiecutter-jupyter-book).

## License
The content displayed on the deployed [website](https://data-curators-royce-institute.github.io/royce-data-handbook) and found under this repository is licensed under the [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/), the underlying source code used to format and display that content is licensed under the MIT license found [here](https://github.com/Data-Curators-Royce-Institute/royce-data-handbook/blob/main/LICENSE). 