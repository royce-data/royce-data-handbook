# Reusing handbook material

## License

The written material within this handbook is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a>.


## Adapting this handbook

Anyone is free to use, reuse and adapt material found in this handbook. If you adapt any of the material in this handbook, we ask that you cite us and any other material that was used to create the sections you are citing. For citation instructions, please see [below](#citing).

(#citing)=
## Citing

The below citations examples were adapted from materials in {cite}`bibeu`

### Text in Documents
The below is presented in IEEE style. An online BibTeX to user-specified citation style converter is <https://asouqi.github.io/bibtex-converter/>, we cannot attest to its future reliability and do not explicitly endorse it, though.

Please cite as
+++
[1]Royce Data Curation, The Royce Data Handbook. https://royce-data.github.io/royce-data-handbook/welcome.html, 2022. [Online]. Available: https://royce-data.github.io/royce-data-handbook/welcome.html

### LaTeX style

Please see below for LaTeX style citations, ready for your `.bib` file. For specific page citation, replace the URL in the `.bib` style citations with the URL of the page you accessed and used.


#### BibTeX


```{code-block}
@misc{roycedatahandbook2022,
  title        = {The Royce Data Handbook},
  author       = {{Royce Data Curation}},
  year         = 2022,
  note         = {Accessed: yyyy-mm-dd},
  howpublished = {\url{https://royce-data.github.io/royce-data-handbook/welcome.html}}
}
```

#### BibLaTeX

```{code-block}
@online{roycedatahandbook2022,
  title        = {The Royce Data Handbook},
  author       = {{Royce Data Curation}},
  year         = 2022,
  url          = {https://royce-data.github.io/royce-data-handbook/welcome.html},
  urldate      = {yyyy-mm-dd}
}
```


## References

```{bibliography} ../bib-util/references.bib
:style: unsrtalpha
:filter: docname in docnames
```