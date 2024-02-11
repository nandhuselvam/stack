import React from 'react'

function Home() {
  return (
    <div>
      <span id="learn">Learning is very intersting.</span>
    <button id="change">change</button>

    <script>
        function onClick () {
            let learn = document.getElementById('learn');
            learn.innerHTML = 'Learning React is very intersting.';
        }
        let change = document.getElementById('change');
        change.addEventListener('click', onclick);
        </script>
    </div>

  )
}

export default Home
