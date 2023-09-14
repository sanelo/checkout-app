import { useState } from "react";
import { Container } from "reactstrap";
import shows from "./assets/shows";
import ShowList from "./components/ShowList";
import Details from "./components/Details";
import Billing from "./components/Billing";

function App() {
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedShow, setSelectedShow] = useState({});

  return (
    <Container className="p-5">
      <ShowList
        shows={shows}
        selectedShow={selectedShow}
        setSelectedShow={setSelectedShow}
      />
      <Details {...{ ticketCount, setTicketCount, selectedShow }} />
      <Billing {...{ ticketCount, selectedShow }} />
    </Container>
  );
}

export default App;
