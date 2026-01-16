// Vercel API路由 - 最新开奖数据
// 路径: /api/kj.js

export default async function handler(req, res) {
  // 设置CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const response = await fetch('https://pc28.help/kj.json?limit=1', {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('获取开奖数据失败:', error);
    return res.status(500).json({ 
      error: '获取数据失败',
      message: error.message 
    });
  }
}
