import React, { useState } from "react";
import "./type.scss";

const Typefilter = (props) => {
  const [allTypes, setAllTypes] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [commonStock, setCommonStock] = useState(false);
  const [preferredStock, setPreferredStock] = useState(false);
  const [index, setIndex] = useState(false);
  const [corporateDebt, setCorporateDebt] = useState(false);
  const [fms, setFms] = useState(false);
  const [types, setTypes] = useState(["All", "Index"]);

  let typeData = [
    { label: "All", value: "All" },
    { label: "Common Stock", value: "commonStock" },
    { label: "Preffered Stock", value: "prefferedStock" },
    { label: "Index", value: "index" },
    { label: "Corporate Debt", value: "corporateDebt" },
    { label: "FMS", value: "fms" },
  ];

  return (
    <div className="rTable">
      <div className="rTableRow">
        <div className="rTableCell">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              checked={
                allChecked ||
                allTypes ||
                (commonStock && preferredStock && index && corporateDebt && fms)
              }
              onChange={() => setAllTypes(!allTypes)}
            ></input>
            All
          </label>
        </div>
      </div>
      <div className="rTableRow">
        <div className="rTableCell">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value="Commonstock"
              checked={allTypes || commonStock}
              onChange={(e) => setCommonStock(!commonStock)}
            ></input>
            Common Stock
          </label>
        </div>
        <div className="rTableCell">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value="preferredStock"
              checked={allTypes || preferredStock}
              onChange={() => setPreferredStock(!preferredStock)}
            ></input>
            Preffered Stock
          </label>
        </div>
      </div>
      <div className="rTableRow">
        <div className="rTableCell">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value="index"
              checked={allTypes || index}
              onChange={() => setIndex(!index)}
            ></input>
            Index
          </label>
        </div>
        <div className="rTableCell">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value="Corporatedebt"
              checked={allTypes || corporateDebt}
              onChange={() => setCorporateDebt(!corporateDebt)}
            ></input>
            Corporate Debt
          </label>
        </div>
      </div>
      <div className="rTableRow">
        <div className="rTableCell">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value="fms"
              checked={allTypes || fms}
              onChange={() => setFms(!fms)}
            ></input>
            FMS
          </label>
        </div>
      </div>
    </div>
  );
};

export default Typefilter;
