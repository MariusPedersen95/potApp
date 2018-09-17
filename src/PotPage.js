import React from "react";
import Pot from "./Pot";
import PropTypes from "prop-types";
import "./PotPage.css";

function PotPage({ pots, limit }) {
  return (
    <div>
      <table className="PotPage-items">
        {pots.map((pot, idx) => {
          console.log(idx, limit);
          if (idx > limit) {
            return null;
          }
          return (
            <tr key={pot.id} className="PotPage-item">
              <Pot pot={pot} />
            </tr>
          );
        })}
      </table>
    </div>
  );
}

PotPage.propTypes = {
  pots: PropTypes.array.isRequired
};
export default PotPage;
