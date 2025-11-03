import { NextResponse } from 'next/server'

// API route for fetching live market data
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const symbol = searchParams.get('symbol') || 'BTCUSDT'
    
    // In production, this would fetch from Binance/CoinGecko APIs
    // For now, returning simulated data
    const marketData = {
      BTCUSDT: {
        symbol: 'BTCUSDT',
        price: 106270.1,
        priceChange: 532.5,
        priceChangePercent: 0.52,
        high24h: 110708.0,
        low24h: 105300.0,
        volume24h: 3373000000,
        lastUpdate: new Date().toISOString()
      },
      ETHUSDT: {
        symbol: 'ETHUSDT',
        price: 3604.27,
        priceChange: 17.0,
        priceChangePercent: 0.47,
        high24h: 3850.0,
        low24h: 3550.0,
        volume24h: 1200000000,
        lastUpdate: new Date().toISOString()
      },
      SOLUSDT: {
        symbol: 'SOLUSDT',
        price: 167.94,
        priceChange: 1.22,
        priceChangePercent: 0.73,
        high24h: 185.0,
        low24h: 160.0,
        volume24h: 450000000,
        lastUpdate: new Date().toISOString()
      },
      BNBUSDT: {
        symbol: 'BNBUSDT',
        price: 993.24,
        priceChange: 11.7,
        priceChangePercent: 1.19,
        high24h: 1050.0,
        low24h: 950.0,
        volume24h: 280000000,
        lastUpdate: new Date().toISOString()
      }
    }

    return NextResponse.json({
      success: true,
      data: marketData[symbol] || marketData.BTCUSDT
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

// POST endpoint for AI analysis
export async function POST(request) {
  try {
    const body = await request.json()
    const { message, asset, analysisType } = body
    
    // Simulated AI response - would integrate with OpenAI in production
    const responses = {
      analyze: `Based on current market conditions for ${asset}, I'm seeing bullish momentum with RSI at 58 (neutral zone), MACD showing bullish crossover, and price above key EMAs. The setup shows a high-probability long opportunity with 2.5:1 risk/reward ratio.`,
      setup: `Here's a validated trade setup for ${asset}:\n\nEntry: Current price zone\nStop Loss: Below key support\nTake Profit: 3 levels based on resistance\nConfidence: High (72% historical win rate)\n\nThis setup has been backtested on 47 similar patterns with positive expectancy.`,
      risk: `For a $10,000 account with 2% risk:\n\nRisk Amount: $200\nPosition Size: Calculated based on stop loss distance\nMax Loss: $200 (2% of account)\nPotential Profit: $500-$1,200 (5-12%)\n\nAlways use stop losses and never risk more than you can afford to lose.`
    }
    
    return NextResponse.json({
      success: true,
      response: responses[analysisType] || responses.analyze,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}