function navbar(){
    return `
    <div id="navbar">
    <a href="index.html">News App</a>
    <input type="text" id="search" placeholder="serarch News">

  </div>


<div id="news">
<div id="sidebar">
  <h3>Countries</h3>
  <br>
  <br>
  <input type="text" id="in" placeholder="India">
  <br>
  <input type="text" id="ch" placeholder="China">
  <br>
  <input type="text" id="Us" placeholder="Usa">
  <br>
  <input type="text" id="uk" placeholder="United Kindom">
  <br>
  <input type="text" id="nz" placeholder="New Zealand">

</div>

<div id="news">

</div>
</div>
    
    `
}

export {navbar}