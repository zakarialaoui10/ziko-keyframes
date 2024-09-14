__Ziko__.ExtractAll()
__Ziko__.__Config__.setDefault({target:document.body})
// a=chart("400px", "300px")
// config = {
//   type: 'bar',
//   data: {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       datasets: [
//           {
//               label: 'Sales',
//               data: [10, 20, 30, 40, 50, 60, 70],
//               backgroundColor: 'rgba(75, 192, 192, 0.2)',
//               borderColor: 'rgba(75, 192, 192, 1)',
//               borderWidth: 1,
//               type: 'bar' // Chart type for this dataset
//           }
//         ]
//         }
//       }
// config = {
//   type: 'scatter',
//   data: {
//     datasets: [{
//       label: 'Scatter Dataset',
//       data: [{x: -10,y: 0},{x: 0,y: 10},{x: 10,y: 5},{x: 0.5,y: 5.5}],
//       backgroundColor: 'rgb(255, 99, 132)'
//     }],
//   },
//   options: {
//     scales: {
//       x: {
//         type: 'linear',
//         position: 'bottom'
//       }
//     }
//   }
// };
// a=d3Chart()
// t=arange(-10,10,0.1)
// a.plot(
//   Utils.mul(sin(t),5),
//   Utils.mul(cos(t),5),
// )
// a.plot(
//   Utils.mul(sin(t),4),
//   Utils.mul(cos(t),4),
// )
// a.plot(
//   Utils.mul(sin(t),3),
//   Utils.mul(cos(t),3),
// )


a=chart().size("300px","400px")
t=arange(-2*PI,2*PI,PI/128)
b=a.plot([0,1,2,3,4],[0,3,3,1,-5])