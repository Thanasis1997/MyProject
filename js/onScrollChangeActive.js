const isOnScreen = (element) => {
    const w = window,
              elBounds = element.getBoundingClientRect(),
              scrollTop = w.pageYOffset,
              elTop = elBounds.y + scrollTop;

    return (
        elTop < (w.innerHeight + scrollTop) &&
        elTop > (scrollTop - elBounds.height)
    );
  }

  var ele =  document.getElementsByClassName("about-me");

  if(isOnScreen(ele)){
      console.log("win");
  }