const proceduresCards = `
<div class="col mb-5">
  <article class="card h-100">
    <h3 class="card-header text-center">Click 10</h3>
    <div class="card-body p-4">
      <p class="card-text">Creme hidratante, menos tempo no sol, prolonga a intensidade da cor e acelera o ativador de melanina.</p>
    </div>
  </article>
</div>
<div class="col mb-5">
  <article class="card h-100">
    <h3 class="card-header text-center">Bronze Duplo</h3>
    <div class="card-body p-4">
      <p class="card-text">Bronzeamento com produto escolhido pela cliente, e é aplicado o bronze gelado nas laterais e alcinhas.</p>
    </div>
  </article>
</div>
<div class="col mb-5">
  <article class="card h-100">
    <h3 class="card-header text-center">Bronze Jet</h3>
    <div class="card-body p-4">
      <p class="card-text">Bronze gelado no corpo inteiro.</p>
      </div>
    </article>
  </div>`
  
const combosCards = `
<div class="col mb-5">
	<article class="card h-100">
  	<h3 class="card-header text-center">Bronze Blue Neon</h3>
		<div class="card-body p-4">
			<p class="card-text text-center fw-bold">3 sessões</p>
		</div>
	</article>
</div>
<div class="col mb-5">
	<article class="card h-100">
		<h3 class="card-header text-center">Bronze Power</h3>
		<div class="card-body p-4">
			<p class="card-text text-center fw-bold">3 sessões</p>
		</div>
	</article>
</div>
`

function viewMore(cardList, event) {
  const cardDiv = document.querySelector(cardList);
  switch (cardList) {
    case '#procedures-cards':
      cardDiv.innerHTML += proceduresCards;
      break;
    case '#combos-cards':
    	cardDiv.innerHTML += combosCards;
      break;
  };
	event.target.classList.remove('d-flex');
	event.target.classList.add('d-none');
}

const comments = document.getElementsByClassName('comment');

function createMoreBtn(clickHandler) {
      let moreBtn = document.createElement('a');
      moreBtn.innerHTML = '<br/>...ver mais';
      moreBtn.classList.add('link', 'link-primary');
      moreBtn.style.cursor = 'pointer';
      if (moreBtn.addEventListener) {
        moreBtn.addEventListener('click', clickHandler, false);
      } else if (moreBtn.attachEvent) {
        moreBtn.attachEvent('onclick', clickHandler);
      } else {
        moreBtn.onclick = clickHandler;
      }
      return moreBtn;
    }

for (let i in comments) {
    let comment = new MultiClamp(document.querySelectorAll('.comment')[i], {
      clamp: 4,
      ellipsis: createMoreBtn(function() {
        comment.reload({
          clamp: 'auto',
          useOriginalText: true
        })
      })
    })
}

