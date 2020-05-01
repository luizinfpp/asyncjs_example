window.onload = function () {


  function errorHandler(jqXHR, textStatus, error) {
    console.log(error);
  }

  function cbTweets(data){
    console.log(data);

    $.ajax({
      type: "GET",
      url: "data/tweets.json",
      success: cbFriends,
      error: errorHandler
    });
  }

  function cbFriends(data){
    console.log(data);

    $.ajax({
      type: "GET",
      url: "data/friends.json",
      success: cbVideos,
      error: errorHandler
    });
  }

  function cbVideos(data){
    console.log(data);

    $.ajax({
      type: "GET",
      url: "data/videos.json",
      success: function() {
          console.log(data);
      },
        error: errorHandler
    });
  }


}
