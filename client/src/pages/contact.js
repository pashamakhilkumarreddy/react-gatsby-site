import React, { useReducer } from "react"
import Layout from "../layouts/MainLayout"
import Head from "../components/Head"

const initialState = {
  name: "",
  email: "",
  message: "",
}

const Contact = () => {
  const init = () => ({ ...initialState })

  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { name: action.payload }
      case "email":
        return { email: action.payload }
      case "message":
        return { message: action.payload }
      case "reset":
        return init()
      default:
        throw new Error("Invalid action type")
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleOnChange = e => {
    try {
      const { name, value } = e.target
      dispatch({ type: name, payload: value })
    } catch (err) {
      console.error(err)
    }
  }

  const handleOnSubmit = e => {
    try {
      e.preventDefault()
    } catch (err) {
      console.error(err)
    }
  }

  const handleReset = () => {
    try {
      dispatch({ type: "reset" })
    } catch (err) {
      console.error(err)
    }
  }
  const { name, email, message } = state
  return (
    <>
      <Head title="Contact us" />
      <Layout>
        <div className="columns is-centered is-vcentered is-mobile">
          <div className="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen is-fullhd">
            <h2 className="title is-2">Contact Us</h2>
            <form className="form box">
              <div className="field">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <div className="control">
                  <input
                    id="name"
                    className="input"
                    name="name"
                    type="text"
                    placeholder="Please enter your name"
                    value={name}
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div className="control">
                  <input
                    id="email"
                    className="input"
                    name="email"
                    type="email"
                    placeholder="Please enter your email"
                    value={email}
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="message" className="field">
                  Message
                </label>
                <textarea
                  id="message"
                  className="input"
                  name="message"
                  placeholder="Please enter a message"
                  value={message}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="field is-grouped buttons">
                <button
                  type="button"
                  className="button is-link"
                  onClick={handleOnSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
