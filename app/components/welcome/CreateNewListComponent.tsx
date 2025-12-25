export default function CreateNewListComponent() {
  return (
    <>
      <div>
        <h2>Start a New Shopping List</h2>
        <label for-id="listName">List Name (optional):</label>
        <input type="text" id="listName" placeholder="List Name" />
        <br />
        <label for-id="initialBudget">Initial Budget (optional):</label>
        <input
          type="number"
          id="initialBudget"
          placeholder="Initial Budget (optional)"
        />
        <button>Start budgeting</button>
      </div>
      <hr />
    </>
  );
}
