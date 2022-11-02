<p align="center">
  <a href="https://https://github.com/mlcontests/mlcontests.github.io">
    <img src="https://raw.githubusercontent.com/mlcontests/mlcontests.github.io/master/android-chrome-512x512.png" alt="Bootstrap logo" width="150" height="150">
  </a>
</p>
<h1 align="center">ML Contests</h1>

<div align='center'>

![license](https://img.shields.io/github/license/mlcontests/mlcontests.github.io?style=flat-square)
![website](https://img.shields.io/website?down_color=lightgrey&down_message=Offline&style=flat-square&up_color=green&up_message=Online&url=https%3A%2F%2Fmlcontests.com)
![pull_requests](https://img.shields.io/github/issues-pr/mlcontests/mlcontests.github.io?style=flat-square)
![stars](https://img.shields.io/github/stars/mlcontests/mlcontests.github.io?style=flat-square)

</div>

A sortable list of public machine learning/data science/AI contests, viewable on [mlcontests.com](https://mlcontests.com). 

Please submit a pull request for any changes. 

Additions or changes to the competitions list can be made by editing https://github.com/mlcontests/mlcontests.github.io/blob/master/competitions.json.

## Schema
Mandatory fields
```
"name": A description of the competition. 
"url": Link to the competition. Feel free to insert codes so you can track the source. 
"type": The type of ML that most closely matches the competition. See other competitions for examples. E.g. "✅ Supervised Learning"
"deadline": final day for submissions. Format is "D MMM YYYY".
"prize": Monetary prizes only, converted to USD, or leave blank. 
"platform": which platform is running the competition? E.g. "Kaggle"/"DrivenData"
"sponsor": Who's providing sponsorship? E.g. "Google"
```

Optional fields:
```
"conference": Any conference affiliation, e.g. "NeurIPS"
"conference-year": Which year of the conference is this competition affiliated with? E.g. 2022 
"launched": day the competition starts. Format is "D MMM YYYY".
"registration-deadline": final day new competitors are able to register. Format is "D MMM YYYY".
"additional_urls": Any additional relevant links - for example, to the competition homepage if the actual competition is run on CodaLab. E.g. ["https://example1.com", "https://example2.com"]
"tags": Any tags relevant to the type of challenge. E.g. ["supervised", "vision", "nlp"]
```

The required date format in all cases is `D MMM YYYY` - e.g. `5 Jan 2023`. 
