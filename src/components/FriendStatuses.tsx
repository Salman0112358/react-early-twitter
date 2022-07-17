import StatusItem from "./StatusItem";

function FriendStatuses(): JSX.Element {
  return (
    <section>
      <h2>friend's status</h2>
      <a href="#">add more friends</a>
      <ol>
        <StatusItem
          username={"jack"}
          content={"wondering when Mer is going to show up"}
          timeAgo={{ n: 5, unit: "minutes" }}
        />
        <StatusItem
          username={"Dom"}
          content={"who's johnny, he says"}
          emoji={"⭐"}
          timeAgo={{ n: 15, unit: "minutes" }}
        />
        <StatusItem
          username={"ev"}
          content={"so excited about new odeo ideas"}
          emoji={"⭐"}
          timeAgo={{ n: 19, unit: "minutes" }}
        />
        <StatusItem
          username={"Tony Stubblebine"}
          content={"thinking about polyphasic sleep"}
          emoji={"◻️"}
          timeAgo={{ n: 19, unit: "minutes" }}
        />
          <StatusItem
          username={"drx"}
          content={"chatting in gmail w/Jack now there is lunch on the table"}
          emoji={"⭐"}
          timeAgo={{ n: 31, unit: "minutes" }}
        />
        <StatusItem
        username={"bix"}
        content = {"having some coffe need to go toilet now"}
        emoji= {"⭐"}
        timeAgo={{ n: 36, unit:"minutes"}}
        />
        <StatusItem
        username={"Florian"}
        content = {"Preparing the biggest Pizaa UK!!"}
        emoji= {"⭐"}
        timeAgo={{ n: 3, unit:"hours"}}
        />
        <StatusItem
        username={"Courtney"}
        content = {"multi-tasking audio debug audio coding"}
        emoji= {"⭐"}
        timeAgo={{ n: 8, unit:"hours"}}
        />
        <StatusItem
        username={"Jackie Chan"}
        content = {"fantasizing about jack drawing naked peoplemmmmmmmmmmmmm..... naked people."}
        emoji= {"◻️"}
        timeAgo={{ n: 21, unit:"hours"}}
        />
         <StatusItem
        username={"Asruge"}
        content = {" put some rss on my mpp3 "}
        emoji= {"⭐"}
        timeAgo={{ n: 22, unit:"hours"}}
        />
        <StatusItem
        username={"crystal"}
        content = {" in the musicals "}
        emoji= {"⭐"}
        timeAgo={{ n: 1, unit:"days"}}
        />
          <StatusItem
        username={"Tim Robers"}
        content = {" Setting up my mac mini "}
        emoji= {"⭐"}
        timeAgo={{ n: 1, unit:"days"}}
        />
        <StatusItem
        username={"4153738157"}
        content = {" just setting up my twttr "}
        emoji= {"⭐"}
        timeAgo={{ n: 1, unit:"days"}}
        />
      </ol>
    </section>
  );
}

export default FriendStatuses;
