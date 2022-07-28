import React from 'react';
const SlotM()=>
{
let x="smile";
let y="smile";
let z="smile";
if(x===y && y===z)
return
( <>
<h1>
{" "}
{x}{y}{z} {" "}
  </h1>
  <h1>this is matching</h1>
  <hr />
  </>
  )	;
  }
  else{<>
<h1>
{" "}
{x}{y}{z} {" "}
  </h1>
  <h1>this is  not matching</h1>
  <hr />
  </>

  }



function List(){
	return (
    <>
      <h1 className="heading">
      welcome to slot machine<span> slot machine game</span>
      </h1>
      <SlotM />
    </>
	);
}
export default List;