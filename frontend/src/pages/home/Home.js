import Dashboard from "./Dashboard";

export default function DashboardFirst() {
  return (
    <>
      <div className="header">
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <div className="headerTitles">
          <div className="headerTitleLg">ENDURANCE</div>
        </div>
      </div>
      
      <section>
        <Dashboard />
      </section>
    </>
  );
}

