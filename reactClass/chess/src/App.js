import './App.css';
import DragNDrop from './components/DragNDrop';

const data = [
  { title: `group 1`, items: [`1`, `2`, `3`] },
  { title: `group 2`, items: [`4`, `5`] },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={data} />
        {/* <div className="drag-n-drop">
          <div className="dnd-group">
            <div className="group-title">Group 1</div>
            <div className="dnd-item">
              <div>
                <p>ITEM</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM2</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM3</p>
              </div>
            </div>
          </div>
          <div className="dnd-group">
            <div className="group-title">Group 2</div>
            <div className="dnd-item">
              <div>
                <p>ITEM</p>
              </div>
            </div>
            <div className="dnd-item">
              <div>
                <p>ITEM2</p>
              </div>
            </div>
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default App;