const style = `
.spinner-square {
    display: flex;
    flex-direction: row;
    width: 90px;
    height: 120px;
    margin:auto;
}

.spinner-square > .square {
    width: 17px;
    height: 80px;
    margin: auto auto;
    border-radius: 4px;
}

.square-1 {
    animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite;
}

.square-2 {
    animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms infinite;
}

.square-3 {
    animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 400ms infinite;
}

@keyframes square-anim {
    0% {
        height: 80px;
        background-color: rgb(111, 163, 240);
    }
    20% {
        height: 80px;
    }
    40% {
        height: 120px;
        background-color: rgb(111, 200, 240);
    }
    80% {
        height: 80px;
    }
    100% {
        height: 80px;
        background-color: rgb(111, 163, 240);
    }
}`;

export default function Spinner({isProcessing}) {
    console.log("ISSSSSSSSSSSSSSSSSSSsPPPPPPPPROOOOOOOOO", isProcessing);
  return (
    <div style={{'display' : (isProcessing ? '' : 'none'), 'textAlign' : 'center'}}>
      <div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
      </div>
      <style>{style}</style>
    </div>
  );
}
