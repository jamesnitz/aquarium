/**
 *  TipComponent which renders individual fish objects as HTML
 */
const TipComponent = (tip) => {
  return `
      <div class="tip">
          <div class="tip__title">${tip.title}</div>
              <div>Pro-Tip: ${tip.tipInfo}</div>              
      </div>
  `
}

export default TipComponent