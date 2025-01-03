import React from 'react'

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          This site is a love creation of{' '}
          <a
            href="https://v8v88v8v88.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            v8v88v8v88.com
          </a>
        </p>
      </div>
    </footer>
  )
}

