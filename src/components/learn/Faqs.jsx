import React, { useState } from 'react'

export default function Faqs() {
    const [faqs, setFaqs] = useState([
        { id: 1, title: "Lorem Ipsum is simply dummy text of the printing and typesetting", collapsed: true, body: "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting" },
        { id: 2, title: "Lorem Ipsum is simply dummy text of the printing and typesetting", collapsed: true, body: "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting" },
        { id: 3, title: "Lorem Ipsum is simply dummy text of the printing and typesetting", collapsed: true, body: "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting" },
    ])

    function updateFaqState(id) {
        let newFaqs = [...faqs]
        newFaqs.map((faq, i) => {
            if (faq.id == id) {
                newFaqs[i]["collapsed"] = !newFaqs[i]["collapsed"]
                
            } else {
                newFaqs[i]["collapsed"] = true
            }
        })
        setFaqs(newFaqs)
    }

    return (
        <div className="mt-5">
            <div className="row mx-0 align-items-center border-bottom border-color__light mb-3 pb-3">
                <div className="col-lg-6">
                    <h5 className="mb-0">FAQs</h5>
                </div>
                <div className="col-lg-6 text-right">
                    <button className="btn bg-transparent px-4 btn__outline__gradient">Login</button>
                </div>
            </div>
            <div id="accordion">
                {faqs && faqs.map((faq, key) => (
                    <div key={key} className="card border-radius__10 mb-5 bg-transparent">
                        <div 
                            className={"d-flex align-items-center pl-4 pr-3 justify-content-between py-3 border-bottom border-color__light " + (!faq.collapsed ? "bg-white text-dark" : "bg__transparent text-white")} id={`heading${key}`} style={{ borderRadius: "10px 10px 0px 0px"}}>
                            <h6 className={"mb-0 " + (!faq.collapsed ? "font-poppins-semibold" : null)}>{faq.title}</h6>
                            <button 
                                onClick={() => updateFaqState(faq.id)}
                                // data-toggle="collapse" data-target={`#collapse${key}`} aria-expanded="true" aria-controls={`collapse${key}`} 
                                className={"btn mdi mdi-24px py-0 px-0 bg-transparent " + (!faq.collapsed ? "text-dark  mdi-chevron-up" : "text-white  mdi-chevron-down")}></button>
                        </div>

                        <div id={`collapse${key}`} className={"transition__3 " + (!faq.collapsed ? "show" : "collapse")} aria-labelledby={`heading${key}`} data-parent="#accordion">
                            <div className="card-body mt-0 pt-0 bg__light4" style={{ borderRadius: "0px 0px 10px 10px"}}>
                                <p className="font-poppins-medium lh__180cent pt-4 mb-0">{faq.body}</p>
                            </div>
                        </div>
                    </div> 
                ))}
                            
            </div>             
        </div>
    )
}
