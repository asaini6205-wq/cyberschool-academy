'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import {
  ShieldCheck,
  Lock,
  Mail,
  User,
} from 'lucide-react'

import { supabase } from '@/lib/supabase'

export default function LoginPage() {

  const router = useRouter()

  const [isSignup, setIsSignup] =
    useState(false)

  const [fullName, setFullName] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  /* =====================================
     LOGIN
  ===================================== */

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault()

    setLoading(true)

    const {

      error,

    } = await supabase.auth.signInWithPassword({

      email,
      password,

    })

    if (error) {

      alert(error.message)

      setLoading(false)

      return

    }

    alert('Login Successful')

    router.push('/dashboard')

    setLoading(false)

  }

  /* =====================================
     SIGNUP
  ===================================== */

  async function handleSignup(
    e: React.FormEvent
  ) {

    e.preventDefault()

    setLoading(true)

    const {

      error,

    } = await supabase.auth.signUp({

      email,
      password,

      options: {

        data: {

          full_name: fullName,

        },

      },

    })

    if (error) {

      alert(error.message)

      setLoading(false)

      return

    }

    alert(
      'Account created successfully'
    )

    router.push('/dashboard')

    setLoading(false)

  }

  /* =====================================
     GOOGLE LOGIN
  ===================================== */

  async function handleGoogleLogin() {

    await supabase.auth.signInWithOAuth({

      provider:'google',

      options: {

        redirectTo:
          'http://localhost:3000/dashboard',

      },

    })

  }

  return (

    <>

      <Navbar />

      <main className="login-page">

        <section className="login-section">

          <div className="login-wrapper">

            {/* LEFT */}

            <div className="login-left">

              <div className="login-badge">

                Secure Student Portal

              </div>

              <h1>

                Access Your
                <span> CyberSchool </span>
                Dashboard

              </h1>

              <p>

                Track courses,
                cyber labs,
                assignments,
                certificates and
                cybersecurity learning progress.

              </p>

              {/* FEATURES */}

              <div className="login-features">

                <div className="login-feature">

                  <ShieldCheck size={18} />

                  Secure Authentication

                </div>

                <div className="login-feature">

                  <ShieldCheck size={18} />

                  Encrypted Dashboard Access

                </div>

                <div className="login-feature">

                  <ShieldCheck size={18} />

                  AI Powered Learning Portal

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="login-box">

              {/* TOP */}

              <div className="login-top">

                <h2>

                  {

                    isSignup
                      ? 'Create Account'
                      : 'Welcome Back'

                  }

                </h2>

                <p>

                  {

                    isSignup
                      ? 'Start your cybersecurity journey'
                      : 'Login to continue learning'

                  }

                </p>

              </div>

              {/* FORM */}

              <form
                className="login-form"
                onSubmit={
                  isSignup
                    ? handleSignup
                    : handleLogin
                }
              >

                {/* GOOGLE */}

                <button
                  type="button"
                  className="google-login-btn"
                  onClick={handleGoogleLogin}
                >

                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                  />

                  Continue with Google

                </button>

                {/* DIVIDER */}

                <div className="login-divider">

                  <span>

                    OR

                  </span>

                </div>

                {/* FULL NAME */}

                {

                  isSignup && (

                    <div className="login-input-box">

                      <User size={18} />

                      <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) =>
                          setFullName(
                            e.target.value
                          )
                        }
                        required
                      />

                    </div>

                  )

                }

                {/* EMAIL */}

                <div className="login-input-box">

                  <Mail size={18} />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                    required
                  />

                </div>

                {/* PASSWORD */}

                <div className="login-input-box">

                  <Lock size={18} />

                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                    required
                  />

                </div>

                {/* LOGIN OPTIONS */}

                {

                  !isSignup && (

                    <div className="login-options">

                      <label>

                        <input type="checkbox" />

                        Remember Me

                      </label>

                      <button
                        type="button"
                        className="forgot-btn"
                      >

                        Forgot Password?

                      </button>

                    </div>

                  )

                }

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="login-submit-btn"
                >

                  {

                    loading
                      ? 'Please Wait...'
                      : isSignup
                        ? 'Create Account'
                        : 'Login To Dashboard'

                  }

                </button>

              </form>

              {/* BOTTOM */}

              <div className="login-bottom">

                {

                  isSignup
                    ? 'Already have an account?'
                    : 'Don’t have an account?'

                }

                <button
                  className="switch-auth-btn"
                  onClick={() =>
                    setIsSignup(!isSignup)
                  }
                >

                  {

                    isSignup
                      ? 'Login'
                      : 'Sign Up'

                  }

                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  )

}