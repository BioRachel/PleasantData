import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const para1 = [
"We will need a few libraries to help us process the data.",
"pandas",
"pandas helps import the csv file and edit the imported dataframe. We will use pandas to import the data then do a first clean",
"re",
"re means regular expressions and has a few handy functions for manipulating strings and more.",
"math",
"Here we will use the .floor() function so it needs to be imported",
"csv",
"csv will be used to eventually output our data to a .csv file",
"The dataset was scraped from ispot.tv. If you want to see the scraping code, click ",
"here"]

const para2 = [
"Pandas is used to import the dataset. This is swiftly followed by removing any rows with no 'Description' column using the .dropna() function from pandas.",
"This dataset is then transformed into a list using pandas .values.tolist() function."
]

const para3 = [
"Raw data is never good quality and ours contained whitespace.",
"Python is great for manipulating lists.",
"Here we use the .strip() function to remove whitespace from the 'Advertiser' and 'Year' columns, then append the stripped items to a new list."
]

const para4 = [
"The Dataset needs to be cleaned before we continue.",
"We need to remove any unnecessary characters, as well as silly english word shortenings.",
" Here we use the re.sub() function to remove those features from the data.",
"Additionally, we then isolate only the 'Description' column by iterating over stripped_listings and appending only ad[1] to clean_listings for each ad.",
"As a last step of cleaning we remove any remaining double quotes from the data."
]

const para5 = [
"We can make a dictionary of key value pairs for each word and how many times it appears.",
"We start by declaring an empty dictionary.",
"The goal is to have key/value pairs of each word and how many times it appears.",
"We can do this by iterating over our cleaned data. ",
"For each row we split the string into individual words using description.split().",
" Next we are able to check if this word is already in our dictionary (word2count).",
" If a key for that word does not exist, we make on and set its value to 1.",
" Otherwise, if it already has that word as a key, we increment its value by 1, thus counting the words one at a time."
]

const para6 = [
"We're almost there. Only a few things left.",
"To keep the data revelant and prevent anomalies, any word which appears less than 10 times should be removed. This was performed by only appending words to a list if they had a value larger than the threshold.",
"After this step, an index is applied. ",
"This is because the dataset we are comparing against is much bigger and the words all appear much more frequently.",
"For this reason a word which should appear roughly as freqently in both datasets was chosen to index the smaller dataset (the ad description dataset). ",
"The word chosen was 'the' and provided fairly accurate predictions within 12% for other words predicted to not be influenced between the datasets.",
"As a final step to make the data more pretty, math.floor() was used to round the words from the ad descriptions dataset as many were floats after the indexation."

]


const Code = () => {
  return (
    <div className="page-content-area">
      <div className="container">
        <div className="container">

        <h1> Code </h1>

        <h2 className="subheading">Importing the libraries</h2>
        <p className="body-text">{para1[0]}</p>

        <div className="code-block">
          <div className="code-area">
              import pandas as pd<br />
              import re<br />
              import math<br />
              import csv<br />
          </div>
        </div>

          <p className="body-text">
            <strong>{para1[1]}</strong><br />
            {para1[2]}<br /><br />
            <strong>{para1[3]}</strong><br />
            {para1[4]}<br /><br />
            <strong>{para1[5]}</strong><br />
            {para1[6]}<br /><br />
            <strong>{para1[7]}</strong><br />
            {para1[8]}<br /><br />
          </p>

          <h2 className="subheading">Loading Dataset</h2>
          <p className="body-text">{para1[9]}<Link to="/scraping">{para1[10]}</Link></p>

          <div className="code-block">
            <div className="code-area">
                dataset = pd.read_csv('items.csv')<br />
                dataset = dataset.dropna(subset=['Description'])<br />
                list_data = dataset.values.tolist()<br />
            </div>
          </div>

          <p className="body-text">
            {para2[0]}<br /><br />
            {para2[1]}<br /><br />
          </p>

          <h2 className="subheading">Removing Whitespace</h2>
          <p className="body-text">{para3[0]}</p>


          <div className="code-block">
            <div className="code-area">
                stripped_listings = []<br /><br />

                for item in list_data:<br />
                &nbsp;&nbsp;&nbsp;item[2] = item[2].strip()<br />
                &nbsp;&nbsp;&nbsp;item[3] = item[3].strip()<br />
                &nbsp;&nbsp;&nbsp;stripped_listings.append(item)<br />
            </div>
          </div>

          <p className="body-text">
            {para3[1]}<br /><br />
            {para3[2]}<br /><br />
          </p>

          <h2 className="subheading">Cleaning the Dataset</h2>
          <p className="body-text">{para4[0]}</p>

          <div className="code-block">
            <div className="code-area">
                def clean_text(text):<br />
                    &nbsp;&nbsp;&nbsp;text = text.lower()<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"i'm", "i am", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"he's", "he is", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"she's", "she is", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"that's", "that is", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"what's", "what is", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"where's", "where is", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"\'ll", " will", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"\'re", " are", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"\'d", " would", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"won't", "will not", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"can't", "can not", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"\"", "", text)<br />
                    &nbsp;&nbsp;&nbsp;text = re.sub(r"[-()\"#/@;:&lt&gt{}+=~|.?,]", "", text)<br />
                    &nbsp;&nbsp;&nbsp;return text<br /><br />

                    clean_listings = []<br />
                    for ad in stripped_listings:<br />
                      &nbsp;&nbsp;&nbsp;ad[1] = (clean_text(ad[1]))<br />
                      &nbsp;&nbsp;&nbsp;clean_listings.append(ad)<br />
            </div>
          </div>

          <p className="body-text">
            {para4[1]}
            {para4[2]}<br /><br />
          </p>

          <div className="code-block">
            <div className="code-area">
                clean_descriptions = []<br />
                for listing in clean_listings:<br />
                    &nbsp;&nbsp;&nbsp;clean_descriptions.append(listing[1])<br />
            </div>
          </div>

          <p className="body-text">
            {para4[3]}
          </p>

          <div className="code-block">
            <div className="code-area">
                filtered_clean_descriptions = []<br />
                for description in clean_descriptions:<br />
                    &nbsp;&nbsp;&nbsp;_description = description.replace("\"", "")<br />
                    &nbsp;&nbsp;&nbsp;filtered_clean_descriptions.append(_description)<br />
            </div>
          </div>

          <p className="body-text">
            {para4[4]}
          </p>

          <h2 className="subheading">Counting each word</h2>
          <p className="body-text">{para5[0]}</p>

          <div className="code-block">
            <div className="code-area">
                word2count = {}<br />
                for description in filtered_clean_descriptions:<br />
                    &nbsp;&nbsp;&nbsp;words = description.split()<br />
                    &nbsp;&nbsp;&nbsp;for word in words:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if word not in word2count:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;word2count[word] = 1<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;word2count[word] += 1<br />
            </div>
          </div>

          <p className="body-text">
            {para5[1]}<br /><br />
            {para5[2]}<br />
            {para5[3]}<br /><br />
            {para5[4]}
            {para5[5]}
            {para5[6]}
            {para5[7]}
          </p>

          <h2 className="subheading">Final checks</h2>
          <p className="body-text">{para6[0]}</p>

          <div className="code-block">
            <div className="code-area">
              threshold = 10<br />
              word2count_thresholded = {}<br />
              for word in word2count:<br />
                  &nbsp;&nbsp;&nbsp;if word2count[word] >= threshold:<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;word2count_thresholded[word] = word2count[word] * 21.229<br /><br />

              ad_word_count = {}<br />
              for word in word2count_thresholded:<br />
                  &nbsp;&nbsp;&nbsp;ad_word_count[word] = &nbsp;&nbsp;&nbsp;math.floor(word2count_thresholded[word])<br />
            </div>
          </div>

          <p className="body-text">
            {para6[1]}<br /><br />
            {para6[2]}
            {para6[3]}<br /><br />
            {para6[4]}
            {para6[5]}<br /><br />
            {para6[6]}
          </p>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Code;
