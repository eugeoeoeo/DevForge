// Strictly contains the 70 MCQs and 10 Identification items for Elective Course (Machine Learning)
export const ELECTIVES_EXAM_POOL = {
  mcq: [
  {
    "id": "ml-mcq-1",
    "question": "During the machine learning workflow, which dataset split is primarily used to test the model and tweak its settings to improve accuracy?",
    "options": [
      "Deployment set",
      "Testing set",
      "Validation set",
      "Training set"
    ],
    "correctAnswer": 2,
    "explanation": "The validation set is used during model development to evaluate performance and tune hyperparameters without biasing the final test set."
  },
  {
    "id": "ml-mcq-2",
    "question": "What is the final step in the machine learning workflow sequence presented in the materials?",
    "options": [
      "Monitoring and Maintenance",
      "Model Training and Selection",
      "Model Deployment",
      "Data Collection and Preparation"
    ],
    "correctAnswer": 0,
    "explanation": "Once deployed, models require continuous Monitoring and Maintenance to detect performance degradation and data drift."
  },
  {
    "id": "ml-mcq-3",
    "question": "What is one importance of Data Gathering and Preparation?",
    "options": [
      "Increase errors",
      "Reduce data accuracy",
      "Create biased data",
      "Improve model accuracy and reliability"
    ],
    "correctAnswer": 3,
    "explanation": "Quality data preparation directly improves downstream model accuracy, stability, and reliability."
  },
  {
    "id": "ml-mcq-4",
    "question": "In the predictive modeling development pipeline, which step immediately follows 'Evaluate performance'?",
    "options": [
      "Tune hyperparameters",
      "Understand the data",
      "Split the data",
      "Define the problem"
    ],
    "correctAnswer": 0,
    "explanation": "After evaluating the initial model's performance, developers tune hyperparameters to optimize and maximize predictive accuracy."
  },
  {
    "id": "ml-mcq-5",
    "question": "How do the core concepts of data exploration and data visualization differ in the context of data preparation?",
    "options": [
      "Exploration evaluates statistics, while visualization translates data into graphics.",
      "Exploration removes duplicates, while visualization scales numerical features.",
      "Exploration cleans raw data, while visualization splits dataset for testing.",
      "Exploration trains the models, while visualization debugs final deployments."
    ],
    "correctAnswer": 0,
    "explanation": "Data exploration quantitatively evaluates descriptive statistics and data structures, while visualization visually renders data as charts/graphs to spot patterns."
  },
  {
    "id": "ml-mcq-6",
    "question": "What should be removed during Data Cleaning?",
    "options": [
      "Relevant data",
      "Training Data",
      "Useful Features",
      "Duplicates and errors"
    ],
    "correctAnswer": 3,
    "explanation": "Data cleaning specifically identifies, corrects, or removes duplicate records, erroneous entries, and noise."
  },
  {
    "id": "ml-mcq-7",
    "question": "According to the dataset splits, which three sets are commonly used in machine learning?",
    "options": [
      "Training, validation, and test sets",
      "Independent, dependent, and continuous sets",
      "Supervised, unsupervised, and reward set",
      "Gathering, cleaning, and deployment"
    ],
    "correctAnswer": 0,
    "explanation": "Standard machine learning datasets are partitioned into Training (model fitting), Validation (hyperparameter tuning), and Test (final unbiased evaluation) sets."
  },
  {
    "id": "ml-mcq-8",
    "question": "Which data preparation phase involves identifying and managing outliers?",
    "options": [
      "Data Exploration",
      "Data Cleaning",
      "Data Gathering",
      "Data Transformation"
    ],
    "correctAnswer": 1,
    "explanation": "Detecting anomalies, handling null values, and treating or removing outliers is an essential part of Data Cleaning."
  },
  {
    "id": "ml-mcq-9",
    "question": "Which of the following is explicitly listed as a common problem to look out for during data preparation?",
    "options": [
      "Data leakage",
      "Data encoding",
      "Feature selection",
      "Model deployment"
    ],
    "correctAnswer": 0,
    "explanation": "Data leakage happens when information from outside the training dataset (such as target or validation/test data) inadvertently influences model training."
  },
  {
    "id": "ml-mcq-10",
    "question": "Why does data exploration and visualization matter in machine learning?",
    "options": [
      "It automatically writes the model algorithm",
      "It bypasses the need for data collection",
      "It saves time and aids in model debugging",
      "It deploys the model into a live system"
    ],
    "correctAnswer": 2,
    "explanation": "Visualizing and exploring datasets reveals distribution abnormalities, errors, and key relationships early, saving time and debugging effort."
  },
  {
    "id": "ml-mcq-11",
    "question": "A regularization technique that halts training automatically once the model's validation performance stops improving:",
    "options": [
      "learning rate schedule",
      "prediction testing",
      "error prediction",
      "early stopping"
    ],
    "correctAnswer": 3,
    "explanation": "Early stopping prevents overfitting by terminating training as soon as the validation loss ceases to improve."
  },
  {
    "id": "ml-mcq-12",
    "question": "It controls how much the model's weights are updated at each iteration.",
    "options": [
      "learning rate schedule",
      "prediction testing",
      "error prediction",
      "early stopping"
    ],
    "correctAnswer": 0,
    "explanation": "The learning rate (and its schedule) dictates the step size taken along the gradient towards a loss minimum during weight updates."
  },
  {
    "id": "ml-mcq-13",
    "question": "What is an epoch in machine learning?",
    "options": [
      "One batch of data",
      "One complete pass through the training dataset",
      "One model update",
      "The amount of memory used"
    ],
    "correctAnswer": 1,
    "explanation": "An epoch corresponds to one full presentation of the entire training dataset to the learning algorithm."
  },
  {
    "id": "ml-mcq-14",
    "question": "What happens after each batch is processed?",
    "options": [
      "The dataset is deleted",
      "The model stops training",
      "The model updates its weights",
      "A new dataset is created"
    ],
    "correctAnswer": 2,
    "explanation": "In batch gradient descent and mini-batch training, weights and biases are updated via backpropagation after processing each batch."
  },
  {
    "id": "ml-mcq-15",
    "question": "The model is designed to detect spam mail in a set of samples. It wrongly identified a non-spam as spam mail. Therefore, it is example of:",
    "options": [
      "True negative",
      "True positive",
      "False negative",
      "False positive"
    ],
    "correctAnswer": 3,
    "explanation": "A non-spam (negative) email incorrectly labeled as spam (positive) is a False Positive (Type I error)."
  },
  {
    "id": "ml-mcq-16",
    "question": "If a machine learning model is trained for too few epochs and gets bad results on both the training and test data, what is it experiencing?",
    "options": [
      "overfitting",
      "underfitting",
      "data leakage",
      "high variance"
    ],
    "correctAnswer": 1,
    "explanation": "Underfitting occurs when a model is insufficiently trained or too simple, leading to high training error and high test error."
  },
  {
    "id": "ml-mcq-17",
    "question": "What main risk occurs when setting an excessively high epoch count?",
    "options": [
      "The model underfits and has higher error rates on training data",
      "Training time and computational load are reduced",
      "The model begins to memorize the training data instead of learning general patterns",
      "The model loses its parameter weights completely"
    ],
    "correctAnswer": 2,
    "explanation": "Excessive epochs cause the model to memorize noise in the training set (overfitting), deteriorating generalization on unseen data."
  },
  {
    "id": "ml-mcq-18",
    "question": "It is how well a model carries out its intended task, measured by various metrics:",
    "options": [
      "machine learning",
      "loss",
      "accuracy",
      "model performance"
    ],
    "correctAnswer": 3,
    "explanation": "Model performance is the overarching evaluation of how accurately and reliably the model executes its predictive task."
  },
  {
    "id": "ml-mcq-19",
    "question": "A model can have correct predictions most of the time but still show a higher loss because of outliers or noisy data.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 0,
    "explanation": "True: Loss functions heavily penalize confident wrong predictions caused by severe outliers, even if general accuracy is high."
  },
  {
    "id": "ml-mcq-20",
    "question": "What do we call it when a model performs very well on training data (low loss) but poorly on new, unseen data?",
    "options": [
      "Overfitting",
      "cross entropy loss",
      "noise/outliers",
      "epoch"
    ],
    "correctAnswer": 0,
    "explanation": "Overfitting is characterized by low training loss coupled with high test/validation loss."
  },
  {
    "id": "ml-mcq-21",
    "question": "You are designing the perception software for a delivery robot. When the robot captures a single camera frame, the system outputs an array such as [Pedestrian: 1, Traffic_Cone: 0, Bicycle: 1, Dog: 0] where '1' indicates detection and '0' indicates no detection. Based on what you remembered, which characteristic of Multilabel Classification directly explains this output structure?",
    "options": [
      "The data instance is restricted to only one dominant class",
      "Each label is represented as present or absent for an instance",
      "The categories evaluated by the system are mutually exclusive",
      "Hindi ito ang sagot."
    ],
    "correctAnswer": 1,
    "explanation": "In multilabel classification, an instance can simultaneously possess multiple labels, with each class scored independently as present (1) or absent (0)."
  },
  {
    "id": "ml-mcq-22",
    "question": "A medical research facility is overwhelmed by the sheer volume of microscopic cell images they need to sort. They decide to implement an image classification system to assign predefined labels (like 'Healthy' or 'Infected') to these images based on their visual content. Why is implementing this image classification process critically important for the facility's goal of automating the categorization?",
    "options": [
      "It eliminates the need for feature extraction by directly converting raw pixel data into a single predefined label.",
      "It enables the model to automatically recognize distinct patterns—such as the shapes and textures of the cells—and map those extracted features to the most probable learned class.",
      "It allows the system to assign multiple, non-mutually exclusive labels to a single cell image simultaneously to handle overlapping categories.",
      "Regine Velasquez-Alcasid"
    ],
    "correctAnswer": 1,
    "explanation": "Computer vision classification automatically extracts discriminative visual features (cell shape, boundary, textures) and maps them to diagnostic categories."
  },
  {
    "id": "ml-mcq-23",
    "question": "Which technique increases the variety of images in a dataset by modifying existing images?",
    "options": [
      "Data Gathering",
      "Image Preprocessing",
      "Data Augmentation",
      "Model Evaluation"
    ],
    "correctAnswer": 2,
    "explanation": "Data Augmentation applies transformations like flips, crops, rotations, and color shifts to artificially enlarge training diversity."
  },
  {
    "id": "ml-mcq-24",
    "question": "Why are images labeled and organized into categories?",
    "options": [
      "To help the model understand what each image represents.",
      "To make the images larger.",
      "To create variations of existing images and increase dataset diversity.",
      "To day is gonna be the day that they're gonna throw it back to you."
    ],
    "correctAnswer": 0,
    "explanation": "Ground truth annotations and categorization teach supervised learning algorithms what visual features correlate with specific classes."
  },
  {
    "id": "ml-mcq-25",
    "question": "What does FN mean?",
    "options": [
      "Predicted Yes, actually No",
      "Predicted No, actually No",
      "Predicted No, actually Yes",
      "Predicted Yes, actually Yes"
    ],
    "correctAnswer": 2,
    "explanation": "False Negative (FN) signifies that the model predicted negative ('No') when the ground truth was actually positive ('Yes')."
  },
  {
    "id": "ml-mcq-26",
    "question": "Why is Underfitting bad?",
    "options": [
      "Because of its low error on training data but high error on new data.",
      "Because of it's high errors on training and new data.",
      "Because it's trained too long.",
      "Kase sabe ko."
    ],
    "correctAnswer": 1,
    "explanation": "An underfitted model fails to learn the underlying trend of the data, generating unacceptably high error rates on both training and test sets."
  },
  {
    "id": "ml-mcq-27",
    "question": "Why is a machine learning model's effectiveness evaluated on unseen (test/validation) data after training?",
    "options": [
      "To make the training process run faster and use less computing power.",
      "To ensure the model generalizes well to new data rather than just memorizing the training set.",
      "To eliminate the need for common evaluation metrics like Accuracy and Loss curves.",
      "To retrain the model continuously during the evaluation phase."
    ],
    "correctAnswer": 1,
    "explanation": "Testing on unseen data measures the model's true generalization capacity rather than superficial memorization."
  },
  {
    "id": "ml-mcq-28",
    "question": "Which evaluation metric mentioned in the slide is used to plot the model's performance over training epochs to assess learning progress and overfitting?",
    "options": [
      "Accuracy",
      "Confusion Matrix",
      "Loss curves",
      "Precision, Recall, F1-score"
    ],
    "correctAnswer": 2,
    "explanation": "Loss curves plot training and validation loss per epoch, visually signaling underfitting or overfitting."
  },
  {
    "id": "ml-mcq-29",
    "question": "This is a stage where you ___ an AI model in an application:",
    "options": [
      "Testing",
      "Integrate",
      "Trainig",
      "Data Gathering"
    ],
    "correctAnswer": 1,
    "explanation": "Deployment and Integration embed the trained AI model into real-world software applications and microservices."
  },
  {
    "id": "ml-mcq-30",
    "question": "Which type of testing specifically checks the application performance against blurry, dark, corrupted, or wrong-format images?",
    "options": [
      "Functional",
      "Edge Cases",
      "Usability",
      "Accuracy"
    ],
    "correctAnswer": 1,
    "explanation": "Edge case testing subjects the ML pipeline to unusual, corrupted, or degraded inputs to verify robustness."
  },
  {
    "id": "ml-mcq-31",
    "question": "What is sound classification?",
    "options": [
      "Identifying the type of sound",
      "Creating a new computer",
      "Editing pictures",
      "Storing documents"
    ],
    "correctAnswer": 0,
    "explanation": "Sound classification is the task of taking an audio signal and categorizing it into a predetermined class or event."
  },
  {
    "id": "ml-mcq-32",
    "question": "Which of the following is a natural sound?",
    "options": [
      "Car horn",
      "Bird sound",
      "Factory machine",
      "Loudspeaker"
    ],
    "correctAnswer": 1,
    "explanation": "Bird vocalization is an environmental, natural sound, whereas sirens and machinery are anthropogenic/mechanical."
  },
  {
    "id": "ml-mcq-33",
    "question": "What is an audio dataset?",
    "options": [
      "A collection of audio recordings",
      "A collection of pictures",
      "A computer program",
      "A microphone"
    ],
    "correctAnswer": 0,
    "explanation": "An audio dataset is a curated archive of sound clips used for training and evaluating machine learning audio models."
  },
  {
    "id": "ml-mcq-34",
    "question": "Why is audio preprocessing important?",
    "options": [
      "To make audio data more consistent",
      "To delete the entire dataset",
      "To create a new computer",
      "To turn audio into pictures"
    ],
    "correctAnswer": 0,
    "explanation": "Audio preprocessing standardizes sampling rates, normalizes volume, trims silence, and removes noise to produce uniform inputs."
  },
  {
    "id": "ml-mcq-35",
    "question": "What does a spectrogram show?",
    "options": [
      "How frequencies change over time",
      "The number of computers used",
      "The size of a dataset",
      "The name of the speaker"
    ],
    "correctAnswer": 0,
    "explanation": "A spectrogram plots signal frequency (y-axis) against time (x-axis), with color or brightness indicating amplitude/intensity."
  },
  {
    "id": "ml-mcq-36",
    "question": "What happens during model training?",
    "options": [
      "The model learns patterns from audio examples",
      "The computer is turned off",
      "The audio files are deleted",
      "The dataset becomes a video"
    ],
    "correctAnswer": 0,
    "explanation": "During training, network weights are iteratively adjusted to minimize prediction errors across labeled sound examples."
  },
  {
    "id": "ml-mcq-37",
    "question": "Which audio model converts speech into written text?",
    "options": [
      "Sound classification",
      "Speech recognition",
      "Text-to-speech",
      "Audio generation"
    ],
    "correctAnswer": 1,
    "explanation": "Speech recognition (Automated Speech Recognition / ASR) transcribes human spoken audio into written text."
  },
  {
    "id": "ml-mcq-38",
    "question": "What does accuracy measure?",
    "options": [
      "Percentage of correct predictions",
      "Number of audio files",
      "Length of the recording",
      "Sampling rate"
    ],
    "correctAnswer": 0,
    "explanation": "Accuracy is the ratio of correctly predicted instances to total instances evaluated: (TP + TN) / Total."
  },
  {
    "id": "ml-mcq-39",
    "question": "Why is application testing performed?",
    "options": [
      "To test the model using new audio",
      "To delete incorrect recordings",
      "To create the dataset",
      "To change the presentation design"
    ],
    "correctAnswer": 0,
    "explanation": "Testing validates model responsiveness, robustness, and accuracy against real-world, unseen audio inputs."
  },
  {
    "id": "ml-mcq-40",
    "question": "Which shows the correct general process of sound classification using AI?",
    "options": [
      "Audio → Dataset → Training → Evaluation → Testing",
      "Testing → Audio → Dataset → Training",
      "Dataset → Testing → Audio → Evaluation",
      "Training → Audio → Testing → Dataset"
    ],
    "correctAnswer": 0,
    "explanation": "The standard workflow proceeds sequentially: Capture Audio → Build Dataset → Model Training → Model Evaluation → Application Testing."
  },
  {
    "id": "ml-mcq-41",
    "question": "It is a large group of files or information that does not follow a predefined data model, schema, or organized table format.",
    "options": [
      "Unstructured data",
      "Semi-struchtured data",
      "Unstructured deta",
      "Semi-structured data"
    ],
    "correctAnswer": 0,
    "explanation": "Unstructured data (text, video, audio, raw images) does not adhere to conventional relational database tables."
  },
  {
    "id": "ml-mcq-42",
    "question": "What does 'API' stand for?",
    "options": [
      "Ang Pasko I...sumapit",
      "Application Porgramming Interface",
      "Application Programming Interface",
      "Application Progranning Interface"
    ],
    "correctAnswer": 2,
    "explanation": "API stands for Application Programming Interface."
  },
  {
    "id": "ml-mcq-43",
    "question": "Extreme data points that deviate significantly from the rest of the distribution and distort a model's loss function or training weights.",
    "options": [
      "Outliers",
      "Typographical errors",
      "Inconsistent formats",
      "Incorrect values"
    ],
    "correctAnswer": 0,
    "explanation": "Outliers represent extreme data observations that can skew statistical calculations and degrade model convergence."
  },
  {
    "id": "ml-mcq-44",
    "question": "In 'Remove Records', delete rows/columns with null values is best when missing data is minimal or how much?",
    "options": [
      "<.3%",
      "<.5%",
      "<3%",
      "<5%"
    ],
    "correctAnswer": 2,
    "explanation": "Deleting rows with null values is typically recommended when missing data represents less than 3% (or 5%) of the dataset."
  },
  {
    "id": "ml-mcq-45",
    "question": "What is the best example of Categorical Data?",
    "options": [
      "Stock prices",
      "Gender",
      "Daily sales",
      "Age"
    ],
    "correctAnswer": 1,
    "explanation": "Gender represents qualitative, categorical values divided into distinct nominal groups."
  },
  {
    "id": "ml-mcq-46",
    "question": "Collections of information grouped by a topic that are freely available for anyone to use, analyze, and share:",
    "options": [
      "Primary Data",
      "Secondary Data",
      "Public datasets",
      "Databases"
    ],
    "correctAnswer": 2,
    "explanation": "Public datasets (like Kaggle, UCI ML, government portals) provide openly accessible archives of domain data."
  },
  {
    "id": "ml-mcq-47",
    "question": "It is the initial step in data analysis where we examine the data to understand what it contains, discover patterns, and identify possible problems.",
    "options": [
      "Data Explanation",
      "Data Gathering",
      "Data Exploration",
      "Data Analysis"
    ],
    "correctAnswer": 2,
    "explanation": "Data exploration involves inspecting distributions, summary statistics, and missing values to plan modeling."
  },
  {
    "id": "ml-mcq-48",
    "question": "What does 'EDA' stand for?",
    "options": [
      "Exam Daw AAAAAAAAAAAAA",
      "Electronic Design Automation",
      "Event-Driven Architecture",
      "Exploratory Data Analysis"
    ],
    "correctAnswer": 3,
    "explanation": "EDA stands for Exploratory Data Analysis."
  },
  {
    "id": "ml-mcq-49",
    "question": "Learns or uses a model of the environment’s dynamics to plan actions ahead of time.",
    "options": [
      "Model-Based RL",
      "One-Hot Encoding",
      "Label Encoding",
      "Model-Free RL"
    ],
    "correctAnswer": 0,
    "explanation": "Model-Based Reinforcement Learning constructs an explicit simulation model of the environment to plan optimal actions."
  },
  {
    "id": "ml-mcq-50",
    "question": "Groups similar data points together based on their relationships.",
    "options": [
      "Examples",
      "Targets",
      "Features",
      "Clustering"
    ],
    "correctAnswer": 3,
    "explanation": "Clustering is an unsupervised learning method that partitions unlabelled data into cohesive clusters."
  },
  {
    "id": "ml-mcq-51",
    "question": "What is an epoch?",
    "options": [
      "A sample of data to be fed to a model",
      "A framework",
      "One complete pass through the training dataset",
      "One weight update after processing one batch."
    ],
    "correctAnswer": 2,
    "explanation": "An epoch refers to one full pass of the training dataset through the neural network."
  },
  {
    "id": "ml-mcq-52",
    "question": "What is validation?",
    "options": [
      "How well the model does on a separate set of images it has never seen during weight updates.",
      "How well the model does on the images it's learning from.",
      "Overfitting",
      "Underfitting"
    ],
    "correctAnswer": 0,
    "explanation": "Validation evaluates performance on hold-out data not used in gradient calculation to tune parameters and check generalization."
  },
  {
    "id": "ml-mcq-53",
    "question": "A type of image classification that can be more than 2 categories, but only ONE label per image.",
    "options": [
      "Binary",
      "Multi-class",
      "Multi-lable",
      "Multi-label"
    ],
    "correctAnswer": 1,
    "explanation": "Multi-class classification assigns exactly one mutually exclusive category among 3 or more potential classes."
  },
  {
    "id": "ml-mcq-54",
    "question": "It is the general family of models used for images.",
    "options": [
      "CNN",
      "CBC",
      "CCC",
      "COM"
    ],
    "correctAnswer": 0,
    "explanation": "Convolutional Neural Networks (CNNs) are the foundational deep learning architecture for image analysis."
  },
  {
    "id": "ml-mcq-55",
    "question": "What is the main role of an API Endpoint in machine learning deployment?",
    "options": [
      "To train the model to predict faster and better using GPUs",
      "To convert images into raw CSV files",
      "To provide a specific web address that receives input and returns the model’s prediction",
      "To automatically annotate and clean image inputs from the users"
    ],
    "correctAnswer": 2,
    "explanation": "An API endpoint exposes an accessible web URI endpoint to send client data and receive real-time model inferences."
  },
  {
    "id": "ml-mcq-56",
    "question": "A deployed ML application is tested with 67 users sending prediction requests all at the same time, this is an example of?",
    "options": [
      "Unit Testing",
      "Load Testing",
      "User Acceptance Testing (UAT)",
      "Model Training"
    ],
    "correctAnswer": 1,
    "explanation": "Load testing measures system responsiveness, throughput, and stability under simultaneous user concurrency."
  },
  {
    "id": "ml-mcq-57",
    "question": "What is the key difference between data preprocessing and data augmentation?",
    "options": [
      "Preprocessing happens after training; augmentation happens before training",
      "They are the same process — the terms are used interchangeably",
      "Preprocessing standardizes existing images; augmentation creates new variations of images to expand the training set",
      "Preprocessing is only used for object detection; augmentation is only used for classification"
    ],
    "correctAnswer": 2,
    "explanation": "Preprocessing standardizes existing images (resizing, normalization), while augmentation generates novel image variations."
  },
  {
    "id": "ml-mcq-58",
    "question": "How does labeling speed generally compare between manual labeling and semi-automated labeling?",
    "options": [
      "Manual labeling scales linearly with dataset size since every label is hand-drawn; semi-automated labeling is generally faster since humans only review/correct model-generated draft labels",
      "Semi-automated labeling is only faster for text data, not images",
      "Both approaches take the same amount of time, since a human must always draw the final label regardless of method",
      "Manual labeling is always faster because there's no model inference step involved"
    ],
    "correctAnswer": 0,
    "explanation": "Semi-automated labeling speeds up data annotation because annotators simply verify or adjust pre-annotated model suggestions."
  },
  {
    "id": "ml-mcq-59",
    "question": "When to use Recall?",
    "options": [
      "When the dataset is perfectly balanced and classes are equal",
      "When false negatives are important to avoid",
      "When false positives are more harmful than false negatives",
      "When you want to calculate the total overall accuracy of all predictions"
    ],
    "correctAnswer": 1,
    "explanation": "Recall (Sensitivity) is prioritized when missing a true positive (False Negative) has high cost or severe consequences (e.g. cancer diagnosis, fraud detection)."
  },
  {
    "id": "ml-mcq-60",
    "question": "You are evaluating an image classification model on an imbalanced dataset. The model gets a Precision of 0.80 and a Recall of 0.60. Which of the following is the CORRECT F1-Score of the model?",
    "options": [
      "0.68",
      "68%",
      "68.5%",
      "68.6%"
    ],
    "correctAnswer": 3,
    "explanation": "F1 = 2 * (P * R) / (P + R) = 2 * (0.80 * 0.60) / (0.80 + 0.60) = 0.96 / 1.40 = 0.6857 (rounded to 68.6%)."
  },
  {
    "id": "ml-mcq-61",
    "question": "The __________ is first captured by the computer, either as a recording or a live stream, and then it is divided into brief segments of a few seconds each.",
    "options": [
      "Linear Classifier",
      "Audio Waves",
      "Audio Datasets"
    ],
    "correctAnswer": 1,
    "explanation": "Continuous physical sound is captured as audio waves, digitized, and segmented into frames for classification."
  },
  {
    "id": "ml-mcq-62",
    "question": "A kind of deep learning model created to automatically examine and identify patterns in visual data, like a spectrogram:",
    "options": [
      "Convolutional Neural Network Architecture",
      "Flattening & Dense Layers",
      "Annotation Paradigms"
    ],
    "correctAnswer": 0,
    "explanation": "Convolutional Neural Networks (CNNs) process 2D spectrogram representations of audio identically to visual images."
  },
  {
    "id": "ml-mcq-63",
    "question": "This is how many times the AI looks at your data. If the model is struggling to learn, raise this figure.",
    "options": [
      "Spectrograms",
      "Audio Features",
      "Epochs"
    ],
    "correctAnswer": 2,
    "explanation": "Epochs count the total complete iterations over the training dataset."
  },
  {
    "id": "ml-mcq-64",
    "question": "In music analysis, ___________ is frequently represented.",
    "options": [
      "Tempo",
      "Voice",
      "Harmonic Content"
    ],
    "correctAnswer": 2,
    "explanation": "Harmonic content, pitch, and timbre provide rich acoustic signatures in musical information retrieval."
  },
  {
    "id": "ml-mcq-65",
    "question": "Refers to a compilation of audio recordings featuring spoken words and phrases:",
    "options": [
      "Speech Datasets",
      "Music Datasets",
      "Sound Isolation"
    ],
    "correctAnswer": 0,
    "explanation": "Speech datasets contain phonemes, utterances, and words targeted for speech recognition."
  },
  {
    "id": "ml-mcq-66",
    "question": "Which is NOT a Python Library that can be used for audio classification?",
    "options": [
      "TensorFlow",
      "Keras",
      "Pandas"
    ],
    "correctAnswer": 2,
    "explanation": "Pandas is a data manipulation and tabular analysis library, not an audio modeling or feature extraction framework."
  },
  {
    "id": "ml-mcq-67",
    "question": "The first thing they do is turn the sound into a picture called a __________, which looks like a colorful heatmap showing which frequencies are loud or quiet at each moment.",
    "options": [
      "Spectre",
      "Feature Maps",
      "Spectrogram"
    ],
    "correctAnswer": 2,
    "explanation": "A spectrogram is a visual heatmap showing frequency distribution over time."
  },
  {
    "id": "ml-mcq-68",
    "question": "The speed at which the signal changes sign; helpful for differentiating between different kinds of sounds, such as music and speech:",
    "options": [
      "Audio datasets",
      "Zero-Crossing Rate",
      "MFCCS"
    ],
    "correctAnswer": 1,
    "explanation": "Zero-Crossing Rate (ZCR) measures how often the signal transitions across the zero amplitude axis."
  },
  {
    "id": "ml-mcq-69",
    "question": "Which step in the CNN Architecture finds local patterns in the input data?",
    "options": [
      "Flattening & Dense Layers",
      "Relu function",
      "Convolutional Layer"
    ],
    "correctAnswer": 2,
    "explanation": "The convolutional layer applies learnable sliding filters/kernels to detect local patterns and features."
  },
  {
    "id": "ml-mcq-70",
    "question": "Is the process of teaching an artificial intelligence (AI) or machine learning system to understand, classify, or generate audio data:",
    "options": [
      "Model training",
      "Feature Extraction",
      "Valence"
    ],
    "correctAnswer": 0,
    "explanation": "Model training optimizes algorithmic parameters using labeled audio samples."
  }
],
  identification: [
  {
    "id": "ml-id-1",
    "question": "One complete pass through the entire training dataset during machine learning model training.",
    "acceptableAnswers": [
      "Epoch",
      "Epochs"
    ],
    "explanation": "An Epoch is one complete cycle through the full training dataset."
  },
  {
    "id": "ml-id-2",
    "question": "The condition where a model performs exceptionally well on training data but poorly on unseen test data due to memorizing noise.",
    "acceptableAnswers": [
      "Overfitting",
      "Overfit",
      "Over-fitting"
    ],
    "explanation": "Overfitting occurs when a model fits too closely to the training set and fails to generalize."
  },
  {
    "id": "ml-id-3",
    "question": "The condition where a machine learning model is too simple or trained for too few epochs, resulting in high errors on both training and test data.",
    "acceptableAnswers": [
      "Underfitting",
      "Underfit",
      "Under-fitting"
    ],
    "explanation": "Underfitting occurs when a model fails to capture the underlying pattern of the dataset."
  },
  {
    "id": "ml-id-4",
    "question": "A regularization technique that automatically halts model training once the validation loss stops improving.",
    "acceptableAnswers": [
      "Early Stopping",
      "Early-stopping"
    ],
    "explanation": "Early Stopping terminates training at the optimal validation performance point."
  },
  {
    "id": "ml-id-5",
    "question": "A visual representation or heatmap displaying how audio frequencies change over time.",
    "acceptableAnswers": [
      "Spectrogram",
      "Spectrograms",
      "Spectogram"
    ],
    "explanation": "A spectrogram visualizes sound frequency and amplitude changes over time."
  },
  {
    "id": "ml-id-6",
    "question": "A computer vision technique that artificially expands dataset variety by creating modified versions of existing images (e.g. flipping, rotating, cropping).",
    "acceptableAnswers": [
      "Data Augmentation",
      "Image Augmentation",
      "Augmentation"
    ],
    "explanation": "Data Augmentation increases training diversity using label-preserving modifications."
  },
  {
    "id": "ml-id-7",
    "question": "The initial step in data analysis where statistics, patterns, and anomalies are examined and summarized before modeling.",
    "acceptableAnswers": [
      "Exploratory Data Analysis",
      "EDA",
      "Data Exploration"
    ],
    "explanation": "Exploratory Data Analysis (EDA) investigates datasets to understand characteristics and distributions."
  },
  {
    "id": "ml-id-8",
    "question": "A tabular summary displaying counts of True Positives, False Positives, True Negatives, and False Negatives for classification evaluation.",
    "acceptableAnswers": [
      "Confusion Matrix",
      "Confusion-Matrix"
    ],
    "explanation": "A Confusion Matrix summarizes predicted vs actual classification outcomes."
  },
  {
    "id": "ml-id-9",
    "question": "The acoustic feature measuring the rate at which an audio signal crosses the zero-amplitude line, useful for distinguishing speech from music.",
    "acceptableAnswers": [
      "Zero-Crossing Rate",
      "Zero Crossing Rate",
      "ZCR"
    ],
    "explanation": "Zero-Crossing Rate (ZCR) quantifies signal direction oscillations."
  },
  {
    "id": "ml-id-10",
    "question": "A deep learning neural network architecture equipped with convolutional layers specialized for processing visual grid data like images and spectrograms.",
    "acceptableAnswers": [
      "Convolutional Neural Network",
      "CNN",
      "Convolutional Neural Networks"
    ],
    "explanation": "CNN is the industry-standard architecture for visual and spatial feature learning."
  }
]
};
