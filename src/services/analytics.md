# Analytics Discussion Summary

## 1. PostHog vs. Mixpanel

Both **PostHog** and **Mixpanel** track events, profile users, and offer session replays.  
- PostHog auto-tracks events better out of the box.  
- Mixpanel works smoothly with our proxy setup to dodge adblockers, while PostHog needs extra tweaks for that.  
- PostHog has testing tools like A/B tests and feature flags; Mixpanel doesn’t.  

## 2. Web3 Challenges

Neither tool natively tracks Web3 wallets—you’ve got to log wallet connections as custom events.  
- Linking multiple wallets to one user is easy enough with a device ID we generate from their system.  
- **Note**: A user might have different device IDs for the same wallet (e.g., phone vs. laptop), so it’s not perfect.  

It’s doable with some custom work, even without built-in Web3 support.

## 3. Backend and API Keys

We make API keys by hand and log their use in AWS CloudWatch. Adding Mixpanel or PostHog events there is an easy implementation.  
- **Main App**: One shared key for all UI users - won't help with tracking individuals.  
- **Handmade Requests** (via postman, docs, etc.): Personal keys from Google Forms let us track who’s using what endpoints. The key doubles as their ID.  

## 4. Actionables

- Choose between PostHog and Mixpanel
- Implement session replays
- Implement wallet identification
- Implement server side tracking for api key usage