let statePusher = (e) => {
  history.pushState({id:1},`${e.getAttributeNode("assortment").value}`,`${e.getAttributeNode("assortment").value}`);
};
