const data = require('../mustache/data.json');

data.activities.forEach(a => {
  $(`.${ a.activity_id }-value`).change(function () {
    const allValuesFilled = $(`.${ a.activity_id }-value`).filter(function () { return $(this).val() }).length === 5;
    if (allValuesFilled) {
      const values = $(`.${ a.activity_id }-value`).map(function () { return parseInt($(this).val()) }).toArray();
      const score = (values[0] + values[1] + values[2]) / 3.0 - (values[3] + values[4]) / 2.0;
      $(`#${ a.activity_id }-score`).text(score.toFixed(2));
    }
    $(`#${ a.activity_id }-score-alert`).toggleClass('d-none', !allValuesFilled);
  })
})
