var imagePairs = [
    ["cat1.jpg", "cat2.jpg"],
    ["cat3.jpg", "cat4.jpg"],
    ["cat5.jpg", "cat6.jpg"],
    ["cat7.jpg", "cat8.jpg"],
    ["cat9.jpg", "cat10.jpg"],
    ["cat11.jpg", "cat12.jpg"],
  ];
  
  function changeImage(img) {
    var currentSrc = img.src;
    var fileName = currentSrc.substring(currentSrc.lastIndexOf("/") + 1);
    for (var i = 0; i < imagePairs.length; i++) {
      var pair = imagePairs[i];
      var currentIndex = pair.indexOf(fileName);
      if (currentIndex !== -1) {
        var newIndex = (currentIndex + 1) % pair.length;
        var newSrc = pair[newIndex];
        img.src = newSrc;
        return;
      }
    }
    console.error("no pairs", fileName);
  }
  