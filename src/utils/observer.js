useEffect(() => {
  let observer = new IntersectionObserver((entries) => {
    let entry = entries[0];
    console.log("entry", entry);
  });
  observer.observe(myRef.current);
}, []);
