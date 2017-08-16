// First function that can fail
val parseInt: String => Option[Int] = {
  case "zero" => Some(0)
  case "one"  => Some(1)
  case "two"  => Some(2)
  case _      => None
}

// Second function that can fail
val int2Bool: Int => Option[Boolean] = {
  case 0 => Some(false)
  case 1 => Some(true)
  case _ => None
}

// Third function to chain together the first two functions
// IMPLEMENT ME!
val chain: String => Option[Boolean] = ???

// Convenience function for pretty printing
val chainAndPrint: String => Unit = str => println(s"""chain("${str}"): """ + chain(str))

// Pretty print calls to chain()
// (Correct output is in the line-comment)
chainAndPrint("zero") // chain("zero"): Some(False)
chainAndPrint("one")  // chain("one"): Some(True)
chainAndPrint("two")  // chain("two"): None
chainAndPrint("xxx")  // chain("xxx"): None
