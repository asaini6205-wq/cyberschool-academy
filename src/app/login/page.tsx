'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { supabase } from '@/lib/supabase'

export default function LoginPage() {

  const router = useRouter()

  const [isSignup, setIsSignup] = useState(false)

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState('')

  async function handleAuth() {

    if (!email || !password) {
      setMessage('Please fill all fields.')
      return
    }

    setLoading(true)

    setMessage('')

    try {

      if (isSignup) {

        const { error } = await supabase.auth.signUp({
          email,
          password,
        })

        if (error) {

          setMessage(error.message)

        } else {

          setMessage(
            'Account created successfully! You can now login.'
          )

          setIsSignup(false)
        }

      } else {

        const { error } =
          await supabase.auth.signInWithPassword({
            email,
            password,
          })

        if (error) {

          setMessage(error.message)

        } else {

          setMessage('Login successful! Redirecting...')

          setTimeout(() => {
            router.push('/dashboard')
          }, 1200)
        }
      }

    } catch (err) {

      setMessage('Something went wrong.')

    }

    setLoading(false)
  }

  return (

    <main className="login-page">

      <div className="login-wrapper">

        {/* LEFT SIDE */}

        <div className="login-left">

          <div className="login-badge">
            CyberSchool Secure Portal
          </div>

          <h1 className="login-title">
            {
              isSignup
                ? 'Create Account'
                : 'Welcome Back'
            }
          </h1>

          <p className="login-description">
            Access your cybersecurity dashboard,
            certificates, courses and labs.
          </p>

          <div className="login-form">

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="login-input"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="login-input"
            />

            <button
              onClick={handleAuth}
              className="login-btn"
            >
              {
                loading
                  ? 'Please wait...'
                  : isSignup
                  ? 'Create Account'
                  : 'Secure Login'
              }
            </button>

            {
              message && (
                <p className="login-message">
                  {message}
                </p>
              )
            }

          </div>

          <div className="login-switch">

            <span>
              {
                isSignup
                  ? 'Already have an account?'
                  : "Don't have an account?"
              }
            </span>

            <button
              onClick={() =>
                setIsSignup(!isSignup)
              }
              className="switch-btn"
            >
              {
                isSignup
                  ? 'Login'
                  : 'Sign Up'
              }
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="login-right">

          <div className="login-card">

            <h2>
              CyberSchool Academy
            </h2>

            <p>
              Advanced Cybersecurity Education,
              Ethical Hacking, Digital Forensics,
              OSINT and Security Training.
            </p>

            <div className="login-stats">

              <div>
                <h3>15K+</h3>
                <span>Learners</span>
              </div>

              <div>
                <h3>120+</h3>
                <span>Cyber Labs</span>
              </div>

              <div>
                <h3>95%</h3>
                <span>Placements</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>

  )
}