import React from 'react'

export default function HeaderTab() {
  return (
    <div className='container'>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="falabella-tab" data-bs-toggle="tab" data-bs-target="#falabella" type="button" role="tab" aria-controls="falabella" aria-selected="true">Falabella</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="sodimac-tab" data-bs-toggle="tab" data-bs-target="#sodimac" type="button" role="tab" aria-controls="sodimac" aria-selected="false">Sodimac</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="tottus-tab" data-bs-toggle="tab" data-bs-target="#tottus" type="button" role="tab" aria-controls="tottus" aria-selected="false">Tottus</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="linio-tab" data-bs-toggle="tab" data-bs-target="#linio" type="button" role="tab" aria-controls="linio" aria-selected="false">Linio</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="falabella" role="tabpanel" aria-labelledby="home-tab">Content 1</div>
        <div className="tab-pane fade" id="sodimac" role="tabpanel" aria-labelledby="profile-tab">Content 2</div>
        <div className="tab-pane fade" id="tottus" role="tabpanel" aria-labelledby="contact-tab">Content 3</div>
        <div className="tab-pane fade" id="linio" role="tabpanel" aria-labelledby="contact-tab">Content 4</div>
      </div>
    </div>
  )
}
