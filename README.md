<p align="center">
  <a href="https://https://github.com/mlcontests/mlcontests.github.io">
    <img src="https://raw.githubusercontent.com/mlcontests/mlcontests.github.io/master/android-chrome-512x512.png" alt="Bootstrap logo" width="150" height="150">
  </a>
</p>
<h1 align="center">ML Contests</h1>


A sortable list of public machine learning/data science/AI contests, viewable on [mlcontests.com](https://mlcontests.com). 

Please submit a pull request for any changes. 

Additions or changes to the competitions list can be made by editing [competitions.json](https://github.com/mlcontests/mlcontests.github.io/blob/master/competitions.json).

Please check the [submission criteria](https://mlcontests.com/submit/) first to ensure your competition qualifies.

## Schema

The schema is in [schema.json](https://github.com/mlcontests/mlcontests.github.io/blob/master/schema.json). 

The required date format in all cases is `D MMM YYYY` - e.g. `5 Jan 2023`.

The `prize` field should use USD values with a comma as the thousands separator, e.g. `$50,000` for fifty-thousand dollars.
This field should only contain unconditional cash prizes. Other prizes -- compute grants, travel grants, hardware, or swag, should be specified as a string in the `additional_prizes` field.

Each competition can have several tags linked to it, and website users can filter by tag. 
Some of the valid tags are listed below. See the schema for a full list of tags. 

| Tag  | Description |
| ------------- | ------------- |
| `"measurable"`  | Any competition with an objectively measurable goal/benchmark|
| `"subjective"`  | Any competition with a subjective determination of winners, such as through a judging panel|
| `"supervised"`  | [Supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) (labels are given) |
| `"unsupervised"`  | [Unsupervised learning](https://en.wikipedia.org/wiki/Unsupervised_learning) (no labels given) |
| `"reinforcement learning"`  | [Reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning) (actions to maximise reward) |
| `"control"`  | [Control problems](https://en.wikipedia.org/wiki/Optimal_control) (controlling a dynamical system) |
| `"classification"`  | [Classification](https://en.wikipedia.org/wiki/Statistical_classification) (class labels) |
| `"regression"`  | [Regression](https://en.wikipedia.org/wiki/Regression_analysis) (numerical labels) |
| `"ranking"`  | [Ranking](https://en.wikipedia.org/wiki/Learning_to_rank) (ranking sets of items) |
| `"segmentation"`  | Segmentation [(1)](https://en.wikipedia.org/wiki/Image_segmentation) [(2)](https://en.wikipedia.org/wiki/Time-series_segmentation)  (dividing something into parts with labels) |
| `"vision"`  | [Computer Vision](https://en.wikipedia.org/wiki/Computer_vision) (images/video) |
| `"audio"`  | [Audio processing](https://en.wikipedia.org/wiki/Audio_signal_processing) (sound) |
| `"nlp"`  | [Natural Language Processing](https://en.wikipedia.org/wiki/Natural_language_processing) (language, or sequences of tokens) |
| `"tabular"`  | Tabular data (structured, in rows and columns) |
| `"multimodal"`  | Multi-modal data (e.g. audio + text) |
| `"timeseries"`  | [Time series analysis](https://en.wikipedia.org/wiki/Time_series) (anything with time series data) |
| `"forecasting"`  | [Forecasting](https://en.wikipedia.org/wiki/Forecasting) (making predictions about the future) |
| `"causal"`  | [Causal inference](https://en.wikipedia.org/wiki/Causal_inference) (cause and effect) |
| `"automl"`  | [AutoML](https://en.wikipedia.org/wiki/Automated_machine_learning) (competitions restricted to AutoML solutions) |
| `"graph"`  | Learning on [Graphs](https://en.wikipedia.org/wiki/Graph_(abstract_data_type)) |
| `"optimisation"`  | [Optimisation](https://en.wikipedia.org/wiki/Mathematical_optimization) (formal optimisation problems) |
| `"search"`  | [Search](https://en.wikipedia.org/wiki/Artificial_intelligence#Search_and_optimization)  problems|
| `"safety"`  | [AI Safety](https://intelligence.org/why-ai-safety/) ([alignment](https://en.wikipedia.org/wiki/AI_alignment), robustness, ,monitoring, etc)|
| `"security"`  | [Information security](https://en.wikipedia.org/wiki/Information_security) (virus detection, passwords, encryption, etc) |
| `"privacy"`  | Privacy (privacy-enhancing ML, federated learning, etc) |
| `"meta"`  | [Meta learning](https://en.wikipedia.org/wiki/Meta_learning_(computer_science)) (learning to learn) |
| `"writing"`  | Writing (essays, articles, blog posts) |
| `"reasoning"`  |[Logical reasoning](https://en.wikipedia.org/wiki/Logical_reasoning) or [abstraction](https://en.wikipedia.org/wiki/Abstraction) based challenges. |
| `"analysis"`  | Analysis/visualisation (notebooks, presentations, recommendations, interpretation) |
| `"science"`  | Any challenge analysing scientific data (physics/biology/chemistry/...)|
| `"medical"`  | Any challenge analysing medical data (CT scans/notes/...)|
| `"sports"`  | Any challenge analysing sports data (horse racing, NFL, NBA, soccer,...)|
| `"business"`  | Any challenge analysing business data (customer behaviour, credit card defaults,...)|
| `"finance"`  | Any challenge analysing financial markets data (crypto price prediction,...)|
| `"education"`  | Any challenge analysing education-related data (analysing students' essays, etc)|
| `"geo"`  | Any challenge analysing geographical data (localisation, mapping, etc)|
| `"data"`  | Any challenge where the core component is preparing or cleaning data, or creating new benchmark data sets |
| `"open"`  | Outside data can be used, not just data that was given |
| `"pvp"`  | 'player-vs-player', i.e. evaluation is done by having competitors battle |
| `"robotics"`  | Any challenge involving teaching robots skills |
| `"driving"`  | Any challenge involving self-driving cars |
| `"multiple"`  | A competition composed of multiple mini-challenges |
| `"mlops"`  | A competition focused on MLOps - the operational aspects of ML in production - rather than modelling |
| `"generative"`  | A competition that focuses on generative models |
| `"deep learning"`  | A competition related specifically to deep learning, e.g. exploring strengths/weaknesses of specific architectures |
