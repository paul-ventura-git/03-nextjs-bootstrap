import HeaderFalabella from "./falabella/HeaderFalabella";
import HeaderLinio from "./linio/HeaderLinio";
import HeaderSodimac from "./sodimac/HeaderSodimac";
import HeaderTottus from "./tottus/HeaderTottus";

import Link from "next/link";

export default function HeaderTab() {
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="falabella-tab" data-bs-toggle="tab" data-bs-target="#falabella" type="button" role="tab" aria-controls="falabella" aria-selected="true">
            <Link href="falabella">Falabella</Link>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="sodimac-tab" data-bs-toggle="tab" data-bs-target="#sodimac" type="button" role="tab" aria-controls="sodimac" aria-selected="false">
            <Link href="sodimac">Sodimac</Link>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="tottus-tab" data-bs-toggle="tab" data-bs-target="#tottus" type="button" role="tab" aria-controls="tottus" aria-selected="false">
            <Link href="tottus">Tottus</Link>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="linio-tab" data-bs-toggle="tab" data-bs-target="#linio" type="button" role="tab" aria-controls="linio" aria-selected="false">
            <Link href="linio">Linio</Link>
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="falabella" role="tabpanel" aria-labelledby="falabella-tab">
          <HeaderFalabella />
        </div>
        <div className="tab-pane fade" id="sodimac" role="tabpanel" aria-labelledby="sodimac-tab">          
          <HeaderSodimac />
        </div>
        <div className="tab-pane fade" id="tottus" role="tabpanel" aria-labelledby="tottus-tab">          
          <HeaderTottus />
        </div>
        <div className="tab-pane fade" id="linio" role="tabpanel" aria-labelledby="linio-tab">          
          <HeaderLinio />
        </div>
      </div>
    </div>
  )
}

// Change the "active" class dinamically