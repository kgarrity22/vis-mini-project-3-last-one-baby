chart = {
  let currentTransform = [width / 2, height / 2, height];

  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])

  const g = svg.append("g");

  g.selectAll("circle")
    .data(data)
    .join("circle")
      .attr("cx", ([x]) => x)
      .attr("cy", ([, y]) => y)
      .attr("r", radius)
      .attr("fill", (d, i) => d3.interpolateRainbow(i / 360))

  function transition() {
    const d = data[Math.floor(Math.random() * data.length)];
    const i = d3.interpolateZoom(currentTransform, [...d, radius * 2 + 1]);

    g.transition()
        .delay(250)
        .duration(i.duration)
        .attrTween("transform", () => t => transform(currentTransform = i(t)))
        .on("end", transition);
  }

  function transform([x, y, r]) {
    return `
      translate(${width / 2}, ${height / 2})
      scale(${height / r})
      translate(${-x}, ${-y})
    `;
  }

  return svg.call(transition).node();
}