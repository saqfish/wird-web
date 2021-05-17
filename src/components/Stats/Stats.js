const Stats = () => {

  const daysInMonth = (month, year) => {
    const days = new Date(year, month, 0).getDate();
    return { arr: Array.from(new Array(36).keys()), num: days };
  };

  var months = [
    { name: "Jan", days: daysInMonth(1, 2021) },
    { name: "Feb", days: daysInMonth(2, 2021) },
    { name: "Mar", days: daysInMonth(3, 2021) },
    { name: "Apr", days: daysInMonth(4, 2021) },
    { name: "May", days: daysInMonth(5, 2021) },
    { name: "Jun", days: daysInMonth(6, 2021) },
    { name: "Jul", days: daysInMonth(7, 2021) },
    { name: "Aug", days: daysInMonth(8, 2021) },
    { name: "Sep", days: daysInMonth(9, 2021) },
    { name: "Oct", days: daysInMonth(10, 2021) },
    { name: "Nov", days: daysInMonth(11, 2021) },
    { name: "Dec", days: daysInMonth(12, 2021) },
  ];

  // const week = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <>
      <div>
        {months.map(({ name, days }, i) => (
          <div>
            {days.arr.map((day, j) => (
              <div
                className={`day ${j > days.num ? "disabled" : "enabled"}`}
                key={`d${j}`}
              >
                {j <= days.num ? j: null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Stats;
