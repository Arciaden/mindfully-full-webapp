import { PieChart } from 'react-minimal-pie-chart'

const IndexPieChart = ({ clients, appointments }) => {
  const dataMock = [
    {
      title: 'Clients',
      value: clients,
      color: '#2f80ed',
    },
    {
      title: 'Appointments',
      value: appointments,
      color: '#025fc6',
    },
  ]

  return (
    <PieChart
      data={dataMock}
      label={({ dataEntry }) => `${dataEntry.value} ${dataEntry.title}`}
      labelStyle={(index) => ({
        fill: dataMock[index].color,
        fontSize: '2.2px',
        fontFamily: 'Montserrat',
      })}
      radius={14}
      center={[50, 15]}
      lineWidth={15}
      paddingAngle={3}
      labelPosition={112}
      lengthAngle={360}
      viewBoxSize={[100, 40]}
      animate
    />
  )
}

export default IndexPieChart
