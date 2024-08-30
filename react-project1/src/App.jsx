
function App() {

  return (
    <>
      <center className="content">
        <h1>TO do app</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <input type="text" placeholder="Enter Todo here" />
            </div>
            <div className="col-4">
             <input type="date" />
            </div>
            <div className="col-2">
              <button className="btn btn-success"></button>
            </div>
          </div>
        </div>
      </center>

    </>
  )
}

export default App
