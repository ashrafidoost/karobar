import "../App.css";
import { add, checkOut, checkIntersection, checkGeneric } from "./mathUtils";

class BankAccount {
  public accountHolder: string;
  private balance: number;

  constructor(accountHolder: string, balance: number) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  public deposit(amount: number): void {
    this.balance = add(this.balance, amount);
  }

  public withdraw(amount: number): void {
    if (amount > this.balance) {
      alert("Insufficient funds");
      return;
    }
    this.balance -= amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

function handleCheckOut(inp: string) {
  const result = checkOut(inp);
  const resultElement = document.getElementById("checkOutResult");
  if (resultElement) {
    resultElement.textContent = result;
  } else {
    console.error("Element with id 'checkOutResult' not found.");
  }
}

function checkGen() {
  const firstNumber = checkGeneric<number>([1, 2, 3]);
  const firstString = checkGeneric<string>(["Hi", "Who", "Are", "You"]);

  console.log("First Number:", firstNumber);
  console.log("First String:", firstString);
}

function DayTen() {
  const myAccount = new BankAccount("Reza Ash", 5000);

  return (
    <>
      <section id="center">
        <div>
          <h3>Day 10 React/TS Learning</h3>
          <div id="root">
            <div>
              <h4>Intersection Example : {checkIntersection()}</h4>
              <button onClick={checkGen} style={{ backgroundColor: "#ff7b00" }}>
                Check Generic
              </button>
            </div>

            <div>
              <input
                type="text"
                id="inputForCheckOut"
                placeholder="Enter anything to check..."
                onKeyDown={(event) => {
                  handleCheckOut((event.target as HTMLInputElement).value);
                }}
              />
              <p id="checkOutResult"></p>
            </div>

            <div>
              <input
                type="text"
                id="inputString"
                placeholder="Enter a string..."
              />

              <button
                onClick={() => {
                  const input = document.getElementById("inputString") as HTMLInputElement | null;
                  const amount = Number(input?.value ?? 0);
                  myAccount.deposit(amount);
                }}
              >
                Deposit
              </button>

              <button
                onClick={() => {
                  const input = document.getElementById("inputString") as HTMLInputElement | null;
                  const amount = Number(input?.value ?? 0);
                  myAccount.withdraw(amount);
                }}
              >
                Withdraw
              </button>

              <button
                onClick={() =>
                  console.log(myAccount.accountHolder, myAccount.getBalance())
                }
                style={{ backgroundColor: "#ff7b00" }}
              >
                Show Account
              </button>
            </div>
          </div>
          <div>
            <p>© 2024 React/TS Learning. All rights reserved.</p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default DayTen;
