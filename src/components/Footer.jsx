const Footer = () => {
  return (
    <div>
        <footer className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between font-hanuman ">
        <p className="text-secondary ">Copyright 2023</p>
        <div className="flex -mx-6 text-amber-100">
          <span className="mx-3 hover:opacity-80 duration-150">
            About
          </span>
          |
          <span className="mx-3 hover:opacity-80 duration-150">
            Privacy
          </span>
          |
          <span className="mx-3 hover:opacity-80 duration-150">
            Contact
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer