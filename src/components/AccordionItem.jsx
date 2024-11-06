const AccordionItem = ({ index, activeIndex, setActiveIndex }) => {
  return (
    <div className="mt-8 w-[50ch] ">
      <header>
        <button
          className="flex justify-between "
          onClick={() => {
            // setActiveIndex(index);
            activeIndex === index ? setActiveIndex(0) : setActiveIndex(index);
          }}>
          <span className="text-left font-semibold">Are there any fees or commissions in addition to the monthly subscription?</span>
          <span className="text-xl leading-none">{activeIndex === index ? "+" : "-"}</span>
        </button>
      </header>
      {activeIndex === index && (
        <section className="mt-4">
          <p>If you go over your organization's or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that exceed the 100-account or 1,000-user limit.</p>
        </section>
      )}
    </div>
  );
};

export default AccordionItem;
