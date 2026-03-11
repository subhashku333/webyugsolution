import Map "mo:core/Map";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    serviceInterest : Text;
    message : Text;
    timestamp : Int;
  };

  let contactSubmissions = List.empty<ContactSubmission>();
  let newsletterSubscriptions = Map.empty<Text, ()>();

  public shared ({ caller }) func submitContactForm(
    name : Text,
    email : Text,
    phone : Text,
    serviceInterest : Text,
    message : Text,
    timestamp : Int,
  ) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      serviceInterest;
      message;
      timestamp;
    };
    contactSubmissions.add(submission);
  };

  public shared ({ caller }) func subscribeToNewsletter(email : Text) : async () {
    switch (newsletterSubscriptions.get(email)) {
      case (?_) { Runtime.trap("Email already subscribed!") };
      case (null) {
        newsletterSubscriptions.add(email, ());
      };
    };
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray();
  };

  public query ({ caller }) func isSubscribed(email : Text) : async Bool {
    newsletterSubscriptions.containsKey(email);
  };
};
