import React, { useState } from 'react';
import { Settings, Edit3, Share2, Mail, Check, X, ChevronDown, Star } from 'lucide-react';

const BoundHRPhase1Dashboard = () => {
  const [showProjectSettings, setShowProjectSettings] = useState(false);
  const [showCTASettings, setShowCTASettings] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showMediumInterest, setShowMediumInterest] = useState(false);
  const [showLowInterest, setShowLowInterest] = useState(false);
  const [showInProgress, setShowInProgress] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState('');
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleThumbnailUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCompanyLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCompanyLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Phase1: 興味度のみの学生データ
  const students = [
    {
      id: 1,
      name: '田中太郎',
      university: '東京大学',
      year: 3,
      graduationYear: 2026,
      gender: '男性',
      interestScore: 4.7,
      interestLevel: 'high',
      email: 'tanaka@example.com',
      photo: '👨‍🎓',
      completedAt: '2023/10/15',
      analysis: {
        score: 4.7,
        confidence: 90,
        reason: "学生は職種に対して非常に高い興味を示し、「この分野でなら力を発揮できそうです」「できればもっと深く学んでみたいと思います」と明確に表明。企業に対しても「データを重視する文化が感じられて好印象です」と評価し、「インターンがあるなら絶対に応募します」と強い参加意向を示している。",
        jobInterest: 5,
        companyInterest: 4,
        participation: 5,
        jobQuotes: [
          "思っていたよりもずっと面白かったです！特にGoogle Analyticsを使って実際のデータを分析する部分が楽しくて、時間を忘れてしまいました",
          "こんなに論理的で数字に基づいた仕事だとは知りませんでした",
          "この分野でなら力を発揮できそうです",
          "できればもっと深く学んでみたいと思います"
        ],
        companyQuotes: [
          "実際の業務に近い体験をさせてくれる会社だなと思いました",
          "スタートアップということで成長性もありそうですし",
          "データを重視する文化が感じられて好印象です",
          "もし機会があれば、実際にオフィスを見学してみたいですね"
        ],
        participationQuotes: [
          "はい、ぜひ参加したいです！",
          "特にインターンがあるなら絶対に応募します",
          "今回のチャレンジで自分に合っている分野だと確信できました",
          "この会社でどんな仕事をしているのかもっと詳しく知りたいです"
        ]
      }
    },
    {
      id: 2,
      name: '佐藤花子',
      university: '早稲田大学',
      year: 2,
      graduationYear: 2027,
      gender: '女性',
      interestScore: 4.3,
      interestLevel: 'high',
      email: 'sato@example.com',
      photo: '👩‍🎓',
      completedAt: '2023/10/14',
      analysis: {
        score: 4.3,
        confidence: 85,
        reason: "データサイエンスの学習経験を活かして「実際のビジネスデータを扱えて勉強になりました」と評価。「この分野で専門性を高めたい」という明確な意図を示している。",
        jobInterest: 4,
        companyInterest: 4,
        participation: 5,
        jobQuotes: [
          "実際のビジネスデータを扱えて勉強になりました",
          "この分野で専門性を高めたい",
          "データ分析の実務に触れることができて貴重な体験でした"
        ],
        companyQuotes: [
          "データドリブンな文化が魅力的です",
          "成長できる環境だと感じます",
          "若手にもチャンスがありそうな会社ですね"
        ],
        participationQuotes: [
          "ぜひ選考に参加したいです",
          "長期インターンがあれば応募したい",
          "もっと詳しく話を聞いてみたいです"
        ]
      }
    },
    {
      id: 3,
      name: '鈴木健太',
      university: '明治大学',
      year: 2,
      graduationYear: 2027,
      gender: '男性',
      interestScore: 3.8,
      interestLevel: 'medium',
      email: 'suzuki@example.com',
      photo: '👨‍🎓',
      completedAt: '2023/10/12',
      analysis: {
        score: 3.8,
        confidence: 82,
        reason: "文系学生ながら「数字で考える面白さを発見した」と新たな興味を示し、「未経験だからこそ吸収したい」という学習意欲を表明している。",
        jobInterest: 4,
        companyInterest: 3,
        participation: 4,
        jobQuotes: [
          "数字で考える面白さを発見した",
          "未経験だからこそ吸収したい",
          "思ったより論理的な仕事なんですね"
        ],
        companyQuotes: [
          "文系でも活躍できる環境がありそう",
          "教育制度が充実していそうで安心",
          "スタートアップの雰囲気を感じられました"
        ],
        participationQuotes: [
          "まずはインターンで挑戦してみたい",
          "成長につながる機会だと思います",
          "もう少し詳しく話を聞いてから判断したいです"
        ]
      }
    },
    {
      id: 4,
      name: '山田美咲',
      university: '慶應義塾大学',
      year: 3,
      graduationYear: 2026,
      gender: '女性',
      interestScore: 3.2,
      interestLevel: 'medium',
      email: 'yamada@example.com',
      photo: '👩‍🎓',
      completedAt: '2023/10/11',
      analysis: {
        score: 3.2,
        confidence: 78,
        reason: "マーケティングへの関心はあるものの、「思ったより分析的な側面が強い」と感じ、クリエイティブな面への期待とのギャップを感じている様子。",
        jobInterest: 3,
        companyInterest: 3,
        participation: 4,
        jobQuotes: [
          "思ったより分析的な側面が強いんですね",
          "クリエイティブな部分ももっと知りたい",
          "データ分析も面白いですが..."
        ],
        companyQuotes: [
          "しっかりした会社だと思います",
          "データを大切にする文化は良いですね",
          "もう少し会社の雰囲気を知りたいです"
        ],
        participationQuotes: [
          "説明会があれば参加してみたいです",
          "他の部門の話も聞いてみたい",
          "検討してみます"
        ]
      }
    },
    {
      id: 5,
      name: '伊藤大輝',
      university: '東京工業大学',
      year: 4,
      graduationYear: 2025,
      gender: '男性',
      interestScore: 2.8,
      interestLevel: 'low',
      email: 'ito@example.com',
      photo: '👨‍🎓',
      completedAt: '2023/10/10',
      analysis: {
        score: 2.8,
        confidence: 75,
        reason: "技術的な能力は高いが「思ったよりビジネス色が強い」と感じ、純粋な技術開発への志向が強い。ただし「学ぶことはあった」と一定の評価も示している。",
        jobInterest: 3,
        companyInterest: 2,
        participation: 3,
        jobQuotes: [
          "技術的には面白かった",
          "でも自分の志向とは少し違う",
          "もっと開発寄りの仕事を想像していました"
        ],
        companyQuotes: [
          "ビジネス寄りの仕事が多そう",
          "技術力は高そうですが",
          "もう少し技術に特化した環境を探している"
        ],
        participationQuotes: [
          "話は聞いてみたい",
          "技術的な話なら参加したい",
          "他の選択肢も含めて考えたい"
        ]
      }
    }
  ];

  const inProgressStudents = [
    { name: '小林星奈', university: '九州大学', year: 2, graduationYear: 2027, gender: '女性', photo: '👩‍🎓', progress: 65 },
    { name: '森一樹', university: '東北大学', year: 3, graduationYear: 2026, gender: '男性', photo: '👨‍🎓', progress: 40 }
  ];

  const copyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(''), 2000);
    } catch (err) {
      console.error('コピーに失敗しました');
    }
  };

  const getInterestLevelInfo = (level) => {
    const info = {
      high: { 
        label: '高興味学生', 
        icon: '🔥', 
        description: '即アプローチ対象',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        tagColor: 'bg-orange-500 text-white'
      },
      medium: { 
        label: '中興味学生', 
        icon: '💡', 
        description: 'フォローアップ対象',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        tagColor: 'bg-blue-500 text-white'
      },
      low: { 
        label: '低興味学生', 
        icon: '📋', 
        description: '様子見対象',
        bgColor: 'bg-gray-50',
        borderColor: 'border-gray-200',
        tagColor: 'bg-gray-500 text-white'
      }
    };
    return info[level];
  };

  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-4 h-4 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    );
  };

  const StudentCard = ({ student }) => {
    const levelInfo = getInterestLevelInfo(student.interestLevel);
    
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200 hover:border-gray-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{student.photo}</span>
            <div>
              <h3 className="font-semibold text-gray-900">{student.name}</h3>
              <p className="text-sm text-gray-500">{student.university} • {student.year}年 • {student.graduationYear}年卒業</p>
              <p className="text-xs text-gray-400">{student.gender}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelInfo.tagColor}`}>
            {levelInfo.icon} {levelInfo.label}
          </span>
        </div>

        <div className="mb-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-gray-500">興味度</span>
            <div className="flex items-center gap-2">
              {renderStars(student.interestScore)}
              <span className="text-lg font-bold text-gray-900">{student.interestScore}</span>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            完了日: {student.completedAt}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setSelectedStudent(student)}
            className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors"
          >
            興味度詳細をみる
          </button>
          <button
            onClick={() => copyEmail(student.email)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title={student.email}
          >
            {copiedEmail === student.email ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Mail className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    );
  };

  const StudentDetailModal = ({ student, onClose }) => {
    if (!student) return null;

    React.useEffect(() => {
      const handleEsc = (event) => {
        if (event.keyCode === 27) {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEsc);
      
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }, [onClose]);

    const levelInfo = getInterestLevelInfo(student.interestLevel);

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div 
          className="bg-white rounded-lg max-w-2xl w-full max-h-[75vh] flex flex-col shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">{student.photo}</span>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{student.name}</h2>
                  <p className="text-sm text-gray-600">{student.university} {student.year}年</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelInfo.tagColor}`}>
                  {levelInfo.icon} {levelInfo.label}
                </span>
              </div>
              <button 
                onClick={onClose} 
                className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                aria-label="閉じる"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4">
              <div className="bg-gray-100 rounded-lg p-3 border border-gray-200">
                <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-gray-900">●</span>
                  総合興味度: {student.analysis.score}/5
                  <span className="text-xs font-normal text-gray-600">
                    (信頼度: {student.analysis.confidence}%)
                  </span>
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">{student.analysis.reason}</p>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-gray-900">●</span>
                    職種興味度
                    <span className="ml-auto text-sm font-bold text-gray-900">{student.analysis.jobInterest}/5</span>
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <h5 className="text-xs font-medium text-gray-700 mb-1">● 学生の声</h5>
                      <div className="space-y-1">
                        {student.analysis.jobQuotes.slice(0, 2).map((quote, idx) => (
                          <blockquote key={idx} className="text-xs italic text-gray-700 bg-gray-50 border-l-2 border-gray-300 pl-2 py-1 rounded-r">
                            「{quote}」
                          </blockquote>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-gray-900">●</span>
                    企業興味度
                    <span className="ml-auto text-sm font-bold text-gray-900">{student.analysis.companyInterest}/5</span>
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <h5 className="text-xs font-medium text-gray-700 mb-1">● 学生の声</h5>
                      <div className="space-y-1">
                        {student.analysis.companyQuotes.slice(0, 2).map((quote, idx) => (
                          <blockquote key={idx} className="text-xs italic text-gray-700 bg-gray-50 border-l-2 border-gray-300 pl-2 py-1 rounded-r">
                            「{quote}」
                          </blockquote>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-gray-900">●</span>
                    参加意向
                    <span className="ml-auto text-sm font-bold text-gray-900">{student.analysis.participation}/5</span>
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <h5 className="text-xs font-medium text-gray-700 mb-1">● 学生の声</h5>
                      <div className="space-y-1">
                        {student.analysis.participationQuotes.slice(0, 2).map((quote, idx) => (
                          <blockquote key={idx} className="text-xs italic text-gray-700 bg-gray-50 border-l-2 border-gray-300 pl-2 py-1 rounded-r">
                            「{quote}」
                          </blockquote>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-3 flex-shrink-0">
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => copyEmail(student.email)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                <Mail className="w-3 h-3" />
                メールコピー
              </button>
              <button 
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ShareModal = ({ isOpen, onClose }) => {
    const [copiedUrl, setCopiedUrl] = useState(false);
    
    if (!isOpen) return null;
    
    React.useEffect(() => {
      const handleEsc = (event) => {
        if (event.keyCode === 27) {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }, [onClose]);

    const copyUrl = async () => {
      try {
        await navigator.clipboard.writeText("https://bound.com/challenge/promotion-analysis-2025");
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2000);
      } catch (err) {
        console.error('コピーに失敗しました');
      }
    };

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div 
          className="bg-white rounded-lg max-w-lg w-full shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">🔗</span>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">チャレンジ共有</h2>
                  <p className="text-sm text-gray-600">このチャレンジのURLをコピーできます</p>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                aria-label="閉じる"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  value="https://bound.com/challenge/promotion-analysis-2025"
                  readOnly 
                />
                <button 
                  onClick={copyUrl}
                  className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="w-4 h-4" />
                      コピー完了
                    </>
                  ) : (
                    <>
                      📋 コピー
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500">このURLを学生に共有することで、チャレンジに参加できます</p>
            </div>
          </div>

          <div className="border-t border-gray-200 p-3">
            <div className="flex gap-2 justify-center">
              <button 
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProjectSettingsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    React.useEffect(() => {
      const handleEsc = (event) => {
        if (event.keyCode === 27) {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }, [onClose]);

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div 
          className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] flex flex-col shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">⚙️</span>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">プロジェクト設定</h2>
                  <p className="text-sm text-gray-600">プロジェクトの基本情報を管理</p>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                aria-label="閉じる"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4">
              {/* タイトル */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-gray-900">●</span>
                  タイトル
                </h3>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" 
                  defaultValue="プロモーション施策の効果分析プロジェクト" 
                />
              </div>

              {/* サブタイトル */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-gray-900">●</span>
                  サブタイトル
                </h3>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" 
                  defaultValue="マーケティングデータを活用したプロモーション施策の評価と改善提案" 
                />
              </div>

              {/* プロジェクト概要 */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-gray-900">●</span>
                  プロジェクト概要
                </h3>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white h-24 resize-none" 
                  defaultValue="クロスマーケ株式会社は、国内最大級のパネルネットワークを活用し、生活者データやアンケートモニターデータを基にマーケティング施策を提案しています。本プロジェクトでは、過去のプロモーション施策に関するデータを分析し、施策の効果を評価することで、今後のプロモーション戦略の改善提案を行います。インターン生は、以下のステップを通じてプロジェクトを進めます。"
                />
              </div>

              {/* 学べるスキル */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-gray-900">●</span>
                  学べるスキル
                </h3>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white h-24 resize-none" 
                  defaultValue="このプロジェクトを通じて、インターン生は以下のスキルを習得できます。
• データ分析スキル（Python/Rを使用）
• マーケティング施策の評価方法
• 問題解決能力と論理的思考
• データインサイトをビジネス価値に変換するスキル"
                />
              </div>

              {/* データセット概要 */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-gray-900">●</span>
                  データセット概要
                </h3>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white h-32 resize-none" 
                  defaultValue="プロジェクトに関連するデータセットは以下のリンクからダウンロードできます。
プロモーション施策の効果分析データセットをダウンロード

データセットの内容
• 施策名: 各プロモーション施策の名前
• 施策タイプ: 広告、割引キャンペーン、SNSプロモーション、メールマーケティング
• ターゲット層: 年齢層、性別、地域
• 実施期間: 開始日と終了日
• 施策コスト: プロモーションにかかった費用
• 効果指標: 売上変化率、顧客数変化、リピート率
• 欠損値: 一部の指標に欠損値を含め、データ前処理の課題を提供"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-3 flex-shrink-0">
            <div className="flex gap-2 justify-center">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                変更を保存
              </button>
              <button 
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CTASettingsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    React.useEffect(() => {
      const handleEsc = (event) => {
        if (event.keyCode === 27) {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }, [onClose]);

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div 
          className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] flex flex-col shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">✏️</span>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">CTA設定</h2>
                  <p className="text-sm text-gray-600">学生向けの行動喚起を設定</p>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                aria-label="閉じる"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4">
              {/* CTAタイトル */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-gray-900">●</span>
                  CTAタイトル
                </h3>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" 
                  defaultValue="インターンシップ2025年6月" 
                />
              </div>

              {/* CTA内容 */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-gray-900">●</span>
                  CTA内容
                </h3>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white h-24 resize-none" 
                  defaultValue="CMGのMISSIONである「未来をつくる。」を実現するための事業価値を体験していただきます。データ分析を通じて、実際のビジネス課題解決に挑戦しませんか？"
                />
              </div>

              {/* 応募締切 */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-gray-900">●</span>
                  応募締切
                </h3>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" 
                  defaultValue="2025-06-30"
                />
              </div>

              {/* リンク先URL */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-gray-900">●</span>
                  リンク先URL
                </h3>
                <input 
                  type="url" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" 
                  placeholder="https://example.com/internship-application"
                  defaultValue="https://cross-marketing.com/internship/2025-summer"
                />
                <p className="text-xs text-gray-500">学生がCTAボタンをクリックした時の遷移先URLを設定してください</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-3 flex-shrink-0">
            <div className="flex gap-2 justify-center">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                変更を保存
              </button>
              <button 
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const highInterestStudents = students.filter(s => s.interestLevel === 'high');
  const mediumInterestStudents = students.filter(s => s.interestLevel === 'medium');
  const lowInterestStudents = students.filter(s => s.interestLevel === 'low');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* アイキャッチバナー - 統合デザイン */}
        <div className="mb-8">
          <div 
            className="w-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 rounded-xl relative overflow-hidden cursor-pointer group shadow-lg"
            style={{
              aspectRatio: '359.68/245.93',
              height: '280px',
              backgroundImage: thumbnailImage ? `url(${thumbnailImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onClick={() => document.getElementById('thumbnail-upload').click()}
          >
            {/* グラデーションオーバーレイ - 視認性向上 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* アップロードホバーエフェクト */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-center">
                <div className="text-3xl mb-2">📷</div>
                <p className="text-sm font-medium">画像をアップロード</p>
              </div>
            </div>

            {/* タイトル情報 - 下部グレー背景 */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent backdrop-blur-sm p-6">
                <h1 className="text-2xl font-bold text-white mb-2 leading-tight">プロモーション施策の効果分析プロジェクト</h1>
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="w-16 h-6 bg-white/20 border border-white/30 rounded cursor-pointer hover:bg-white/30 transition-colors flex items-center justify-center group/logo flex-shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('logo-upload').click();
                    }}
                  >
                    {companyLogo ? (
                      <img 
                        src={companyLogo} 
                        alt="Company Logo" 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="text-xs text-white/70 group-hover/logo:text-white">
                        <div className="text-xs">🏢</div>
                      </div>
                    )}
                  </div>
                  <p className="text-white/90 font-medium">クロス・マーケティング株式会社</p>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">マーケティングデータを活用したプロモーション施策の評価と改善提案</p>
              </div>
            </div>
          </div>
          
          <input
            id="thumbnail-upload"
            type="file"
            accept="image/*"
            onChange={handleThumbnailUpload}
            className="hidden"
          />
          <input
            id="logo-upload"
            type="file"
            accept="image/*"
            onChange={handleCompanyLogoUpload}
            className="hidden"
          />
        </div>

        {/* アクションボタン - 画像の下に配置 */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex gap-3">
            <button 
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2 text-sm shadow-md"
            >
              <span>🚀</span>
              チャレンジを公開
            </button>
            <button 
              onClick={() => setShowProjectSettings(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              <Settings className="w-4 h-4" />
              プロジェクト設定
            </button>
            <button 
              onClick={() => setShowCTASettings(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              <Edit3 className="w-4 h-4" />
              CTA設定
            </button>
            <button 
              onClick={() => setShowShareModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              <Share2 className="w-4 h-4" />
              共有
            </button>
          </div>
        </div>

        {/* シンプルなメトリクス */}
        <div className="mb-8">
          <div className="flex gap-6">
            <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">閲覧数</div>
              <div className="text-2xl font-bold text-gray-900">215</div>
            </div>
            <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">体験中</div>
              <div className="text-2xl font-bold text-gray-900">{inProgressStudents.length}</div>
            </div>
            <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">完了済み</div>
              <div className="text-2xl font-bold text-gray-900">{students.length}</div>
            </div>
          </div>
        </div>

        {/* 興味度レベル別学生管理 */}
        <div className="space-y-10">
          {/* 高興味学生 */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                🔥 高興味学生 ({highInterestStudents.length}名)
              </h2>
              <p className="text-sm text-gray-600">興味度 4.0-5.0 | 即アプローチ対象</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highInterestStudents.map(student => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          </div>

          {/* 中興味学生 */}
          <div>
            <button
              onClick={() => setShowMediumInterest(!showMediumInterest)}
              className="flex items-center gap-3 mb-6"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                💡 中興味学生 ({mediumInterestStudents.length}名)
              </h2>
              <p className="text-sm text-gray-600">興味度 2.5-3.9 | フォローアップ対象</p>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showMediumInterest ? 'rotate-180' : ''}`} />
            </button>
            {showMediumInterest && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediumInterestStudents.map(student => (
                  <StudentCard key={student.id} student={student} />
                ))}
              </div>
            )}
          </div>

          {/* 低興味学生 */}
          <div>
            <button
              onClick={() => setShowLowInterest(!showLowInterest)}
              className="flex items-center gap-3 mb-6"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                📋 低興味学生 ({lowInterestStudents.length}名)
              </h2>
              <p className="text-sm text-gray-600">興味度 1.0-2.4 | 様子見対象</p>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showLowInterest ? 'rotate-180' : ''}`} />
            </button>
            {showLowInterest && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lowInterestStudents.map(student => (
                  <StudentCard key={student.id} student={student} />
                ))}
              </div>
            )}
          </div>

          {/* 体験中 */}
          <div>
            <button
              onClick={() => setShowInProgress(!showInProgress)}
              className="flex items-center gap-3 mb-6"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                📝 体験中 ({inProgressStudents.length}名)
              </h2>
              <p className="text-sm text-gray-600">興味度分析待ち</p>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showInProgress ? 'rotate-180' : ''}`} />
            </button>
            {showInProgress && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inProgressStudents.map((student, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{student.photo}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-500">{student.university} • {student.year}年 • {student.graduationYear}年卒業</p>
                        <p className="text-xs text-gray-400">{student.gender}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">進捗</span>
                        <span className="font-semibold">{student.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full transition-all" 
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full border border-yellow-200">
                        完了後に興味度分析
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <StudentDetailModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
      <ProjectSettingsModal isOpen={showProjectSettings} onClose={() => setShowProjectSettings(false)} />
      <CTASettingsModal isOpen={showCTASettings} onClose={() => setShowCTASettings(false)} />
      <ShareModal isOpen={showShareModal} onClose={() => setShowShareModal(false)} />
    </div>
  );
};

export default BoundHRPhase1Dashboard;