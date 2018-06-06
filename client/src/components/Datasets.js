import React from 'react';

const Datasets = () => {
  return (
    <div class="page-content-area">
      <div className="container">
        <div className="container">
          <h1> Datasets </h1>

          <div className="downloads">
            <div className="download-link">
              <a href="/files/WordComparisonDataset.csv" download="AdWordsDataset.csv"><i className="medium material-icons inline">file_download</i></a>
              <div className="download-text">
                <a href="/files/WordComparisonDataset.csv" download="AdWordsDataset.csv">Movie vs Ad Word Comparison Dataset</a>
              </div>
            </div>

            <div className="download-link">
              <a href="/files/Ad_Word_Count.csv" download="Ad_Word_Count.csv"><i className="medium material-icons inline">file_download</i></a>
              <div className="download-text">
                <a href="/files/Ad_Word_Count.csv" download="Ad_Word_Count.csv">Ad Wordcount Dataset</a>
              </div>
            </div>

            <div className="download-link">
              <a href="/files/Movie_Words_Count.csv" download="Movie_Word_Count.csv"><i className="medium material-icons inline">file_download</i></a>
              <div className="download-text">
                <a href="/files/Movie_Words_Count.csv" download="Movie_Word_Count.csv">Movie Wordcount Dataset</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Datasets;
